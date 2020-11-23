<script>
  export let week
  export let year
  export let past
  export let current
  export let disabled
</script>

<style>
  div {
    background: white;
    border: 1px solid #ddd;
  }
  div.past {
    background: orange;
    border: none;
  }
  div.disabled {
    background: transparent;
    border: none;
  }
  div.current {
    background: red;
    border: none;
  }
</style>

<div
  id="{year}-{week}"
  class={disabled ? 'disabled' : past ? 'past' : current ? 'current' : ''} />
