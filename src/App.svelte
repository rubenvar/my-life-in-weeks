<script>
  import Life from "./Life.svelte";

  // defaults
  let yearsToLive = 50;
  $: if (yearsToLive < 20) yearsToLive = 20;
  $: if (yearsToLive > 100) yearsToLive = 100;
  let dateString = "1993-07-31";
  $: dateOfBirth = new Date(dateString);
</script>

<style>
  fieldset {
    padding: 0;
    border: none;
    height: 25px;
  }
</style>

<!-- <Form fn={handleThings} /> -->
<fieldset>
  <label for="birthDate">Date of Birth: <input type="date" name="birthDate" bind:value={dateString} /> </label>
  <label for="lifeYears">Years to Live:
    <input type="number" name="lifeYears" bind:value={yearsToLive} min="0" max="100" />
  </label>
</fieldset>
<Life yearsToLive={yearsToLive + 1} {dateOfBirth} />
