<script>
  import Week from './Week.svelte'
  export let year
  export let birth
  export let death
  export let weekOfBirth

  let weeksPerYear = 52
  let weeks = Array(weeksPerYear)
    .fill(null)
    .map((_, i) => i + 1)

  const now = new Date()
  const currentYear = now.getFullYear()
  const yearStart = new Date(currentYear, 0, 1)
  // get current week in JS
  const currentWeek = Math.ceil(
    ((now - yearStart) / 86400000 + yearStart.getDay() + 1) / 7,
  )
</script>

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

<div class="year">
  <div class="year-name">{year}</div>
  {#each weeks as week}
    <Week
      {year}
      {week}
      past={year < currentYear || (year === currentYear && week < currentWeek)}
      disabled={(birth && week < weekOfBirth) || (death && week > weekOfBirth)}
      current={year === currentYear && week === currentWeek} />
  {/each}
</div>
