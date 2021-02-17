<script lang="ts">
  import Week from "./Week.svelte";
  export let year;
  export let birth;
  export let death;
  export let yearOfBirth;
  export let weekOfBirth;
  // $: yearOfBirth;
  // $: weekOfBirth;
  // $: console.log(yearOfBirth);

  let weeksPerYear = 52;
  let weeks = Array(weeksPerYear)
    .fill(null)
    .map((_, i) => i + 1);

  const now = new Date();
  const currentYear = now.getFullYear();
  const yearStart = new Date(currentYear, 0, 1);
  // get current week in JS
  const currentWeek = Math.ceil(
    ((now - yearStart) / 86400000 + yearStart.getDay() + 1) / 7
  );

  $: isPast = (week) =>
    year < currentYear || (year === currentYear && week < currentWeek);
  $: isDisabled = (week) =>
    (birth && week < weekOfBirth) || (death && week > weekOfBirth);
  $: isCurrent = (week) => year === currentYear && week === currentWeek;
  $: isHalf = (week) =>
    week === 52 / 4 || week === 52 / 2 || week === (52 * 3) / 4;
  $: getContent = (week) =>
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
      past={isPast(week)}
      disabled={isDisabled(week)}
      current={isCurrent(week)}
      half={isHalf(week)}
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
