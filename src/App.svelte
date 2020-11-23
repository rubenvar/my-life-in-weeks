<script>
  import Life from "./Life.svelte";

  // defaults
  $: yearsToLive = 50;
  let dateString = "1990-07-31";
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
  <label for="birthDate">Date of Birth: <input type="text" name="birthDate" bind:value={dateString} /> </label>
  <label for="lifeYears">Years to Live: <input type="number" name="lifeYears" bind:value={yearsToLive} /> </label>
</fieldset>
<Life yearsToLive={yearsToLive + 1} {dateOfBirth} />
