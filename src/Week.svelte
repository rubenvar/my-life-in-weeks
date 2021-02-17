<script lang="ts">
  export let week: number;
  export let year: number;
  export let isHalf: boolean;
  export let isPast: boolean;
  export let isCurrent: boolean;
  export let isDisabled: boolean;
  export let content: number;

  let color = "white";
  $: {
    if (isDisabled) color = "transparent";
    else if (isPast && isHalf) color = "hsl(39, 100%, 65%)";
    else if (isPast) color = "orange";
    else if (isHalf) color = "#fafafa";
    else if (isCurrent) color = "red";
    else color = "white";
  }
</script>

<div id="{year}-{week}" style="background-color: {color};">
  {#if content !== undefined}{content}{/if}
</div>

<style>
  div {
    background: white;
    font-size: 7px;
    display: grid;
    align-items: center;
    justify-items: center;
  }
</style>
