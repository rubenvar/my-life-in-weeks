<script lang="ts">
  import Week from "./Week.svelte";
  export let year: number;
  export let isBirth: boolean;
  export let isDeath: boolean;
  export let yearOfBirth: number;
  export let weekOfBirth: number;

  let weeksPerYear: number = 52;
  let weeks: number[] = Array(weeksPerYear)
    .fill(null)
    .map((_, i) => i + 1);

  const now: Date = new Date();
  const currentYear: number = now.getFullYear();
  const yearStart: Date = new Date(currentYear, 0, 1);
  // get current week in JS
  const currentWeek: number = Math.ceil(
    ((now.valueOf() - yearStart.valueOf()) / 86400000 +
      yearStart.getDay() +
      1) /
      7
  );

  $: checkIsPast = (week: number): boolean =>
    year < currentYear || (year === currentYear && week < currentWeek);
  $: checkIsDisabled = (week: number): boolean =>
    (isBirth && week < weekOfBirth) || (isDeath && week > weekOfBirth);
  $: checkIsCurrent = (week: number): boolean =>
    year === currentYear && week === currentWeek;
  $: checkIsHalf = (week: number): boolean =>
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
    grid-template-columns: 1fr repeat(52, 1fr);
    gap: 3px;
  }
  .year-name {
    font-size: 7px;
    vertical-align: middle;
  }
</style>
