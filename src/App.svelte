<script>
  import Form from './Form.svelte'
  import Life from './Life.svelte'
  // TODO get these from form
  let yearsToLive = 50
  let dateOfBirth = new Date('1990-07-31')

  function handleThings(thing) {
    dateOfBirth = new Date(thing)
    console.log(dateOfBirth)
  }
</script>

<Form fn={handleThings} />
<Life yearsToLive={yearsToLive + 1} {dateOfBirth} />
