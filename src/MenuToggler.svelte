<script lang="ts">
  import { showMenu } from "./stores";
  const toggleMenu = (): void => showMenu.update(() => !$showMenu);
</script>

<button class:show={$showMenu} on:click={toggleMenu}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-chevrons-right"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="7 7 12 12 7 17" />
    <polyline points="13 7 18 12 13 17" />
  </svg>
</button>

<style lang="scss">
  button {
    position: absolute;
    padding: 0;
    top: 12px;
    left: 36px;
    z-index: 99;
    font-size: 22px;
    border-radius: none;
    box-shadow: none;
    border: none;
    background-color: transparent;
    transition: all 0.25s;
    transform: rotate(0);
    cursor: pointer;
    &.show {
      transform: rotate(180deg);
      box-shadow: none;
    }
    svg {
      stroke: black;
      vertical-align: middle;
    }
  }
</style>
