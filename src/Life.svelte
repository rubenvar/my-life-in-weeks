<script lang="ts">
  import Year from "./Year.svelte";
  import { yearsToLive } from "./stores/years";
  export let dateOfBirth: Date;

  const maxWeeksInYear = 53;
  // weeks for header, duplicated with weeks in Year component
  const weeks = Array(maxWeeksInYear)
    .fill(null)
    .map((_, i) => i + 1);
  // create array of years
  $: yearsArray = Array($yearsToLive + 1)
    .fill(null)
    .map((_, i) => yearOfBirth + i);

  $: yearOfBirth = dateOfBirth.getFullYear();
  $: yearOfBirthStart = new Date(yearOfBirth, 0, 1);
  $: weekOfBirth = Math.ceil(
    ((dateOfBirth.valueOf() - yearOfBirthStart.valueOf()) / 86400000 +
      yearOfBirthStart.getDay() +
      1) /
      7
  );
</script>

<div class="life" style="--years: {$yearsToLive + 1}">
  <!-- header (week numbers) -->
  <div class="header">
    <div />
    {#each weeks as week}
      <div>{week}</div>
    {/each}
  </div>
  <!-- all the years -->
  {#each yearsArray as year}
    <Year
      {year}
      {weekOfBirth}
      {yearOfBirth}
      isBirth={year === yearOfBirth}
      isDeath={year === yearOfBirth + $yearsToLive + 1 - 1} />
  {/each}
</div>

<style>
  .life {
    --weekMargin: 3px;
    padding: 12px;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr repeat(var(--years), 1fr);
    gap: var(--weekMargin);
    background: #eee;
  }
  .header {
    display: grid;
    grid-template-columns: 1fr repeat(53, 1fr);
    font-size: 7px;
    text-align: center;
  }
  .header div {
    display: grid;
    justify-items: center;
    align-items: center;
  }
</style>
