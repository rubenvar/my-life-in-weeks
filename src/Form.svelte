<script>
  export let fn
  let date
  $: fn(date)
</script>

<style>
  .form {
    margin: 12px;
  }
</style>

<div class="form">
  <label for="birthDate">
    Date of Birth:
    <input type="text" name="birthDate" bind:value={date} />
  </label>
</div>
