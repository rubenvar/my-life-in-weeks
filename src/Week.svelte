<script>
  export let week;
  export let year;
  export let half;
  export let past;
  export let current;
  export let disabled;
  export let content;

  let color = "white";
  $: {
    if (disabled) color = "transparent";
    else if (past && half) color = "hsl(39, 100%, 65%)";
    else if (past) color = "orange";
    else if (half) color = "#fafafa";
    else if (current) color = "red";
    else color = "white";
  }
</script>

<style>
  div {
    background: white;
    font-size: 7px;
    display: grid;
    align-items: center;
    justify-items: center;
  }
</style>

<div id="{year}-{week}" style="background-color: {color};">
  {#if content !== undefined}{content}{/if}
</div>

<!-- class={disabled ? 'disabled' : past ? 'past' : current ? 'current' : ''} -->
