<script>
  import Year from "./Year.svelte";
  export let yearsToLive;
  export let dateOfBirth;
  $: console.log(dateOfBirth);

  const weeksPerYear = 52;
  // weeks for header, duplicated with weeks in Year component
  const weeks = Array(weeksPerYear)
    .fill(null)
    .map((_, i) => i + 1);
  // create array of years
  $: years = Array(yearsToLive)
    .fill(null)
    .map((_, i) => yearOfBirth + i);

  $: yearOfBirth = dateOfBirth.getFullYear();
  $: yearOfBirthStart = new Date(yearOfBirth, 0, 1);
  $: weekOfBirth = Math.ceil(((dateOfBirth - yearOfBirthStart) / 86400000 + yearOfBirthStart.getDay() + 1) / 7);
</script>

<style>
  .life {
    padding: 12px;
    height: calc(100vh - 24px - 25px);
    display: grid;
    grid-template-rows: 1fr repeat(var(--years), 1fr);
    gap: 3px;
    background: #eee;
  }
  .header {
    display: grid;
    grid-template-columns: 1fr repeat(52, 1fr);
    font-size: 7px;
    text-align: center;
  }
  .header div {
    display: grid;
    justify-items: center;
    align-items: center;
  }
</style>

<div class="life" style="--years: {yearsToLive}">
  <!-- header (week numbers) -->
  <div class="header">
    <div />
    {#each weeks as week}
      <div>{week}</div>
    {/each}
  </div>
  <!-- all the years -->
  {#each years as year}
    <Year {year} {weekOfBirth} birth={year === yearOfBirth} death={year === yearOfBirth + yearsToLive - 1} />
  {/each}
</div>
