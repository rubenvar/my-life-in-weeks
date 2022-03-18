<script lang="ts">
  import Week from "./Week.svelte";
  import dayjs from "dayjs";
  import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
  import isLeapYear from "dayjs/plugin/isLeapYear";
  import weekOfYear from "dayjs/plugin/weekOfYear";
  import isoWeek from "dayjs/plugin/isoWeek";

  dayjs.extend(isoWeeksInYear);
  dayjs.extend(isLeapYear);
  dayjs.extend(weekOfYear);
  dayjs.extend(isoWeek);

  export let year: number;
  export let isBirth: boolean;
  export let isDeath: boolean;
  export let yearOfBirth: number;
  export let weekOfBirth: number;

  let weeksInYear = dayjs(`${year}-01-01`).isoWeeksInYear();
  let weeks: number[] = Array(weeksInYear)
    .fill(null)
    .map((_, i) => i + 1);

  const now: Date = new Date();
  const currentYear: number = now.getFullYear();
  // get current week in JS
  const currentWeek = dayjs().isoWeek();

  $: checkIsPast = (week: number) =>
    year < currentYear || (year === currentYear && week < currentWeek);
  $: checkIsDisabled = (week: number) =>
    (isBirth && week < weekOfBirth) || (isDeath && week > weekOfBirth);
  $: checkIsCurrent = (week: number) =>
    year === currentYear && week === currentWeek;
  $: checkIsHalf = (week: number) =>
    week === 52 / 4 || week === 52 / 2 || week === (52 * 3) / 4;
  $: getContent = (week: number): number =>
    week === weekOfBirth && (year - yearOfBirth) % 5 === 0
      ? year - yearOfBirth
      : undefined;
</script>

<div class="year">
  <div class="year-name">{year}</div>
  {#each weeks as week}
    <Week
      {year}
      {week}
      isPast={checkIsPast(week)}
      isDisabled={checkIsDisabled(week)}
      isCurrent={checkIsCurrent(week)}
      isHalf={checkIsHalf(week)}
      content={getContent(week)} />
  {/each}
</div>

<style>
  .year {
    display: grid;
    grid-template-columns: 1fr repeat(53, 1fr);
    gap: var(--weekMargin);
  }
  .year-name {
    font-size: 7px;
    vertical-align: middle;
  }
</style>
