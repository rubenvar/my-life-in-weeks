<script lang="ts">
  import { showMenu } from "./stores";
  const toggleMenu = () => showMenu.update(() => !$showMenu);
</script>

<button class:show={$showMenu} on:click={toggleMenu}>
  {!$showMenu ? "Show" : "Hide"} Menu
</button>

<style lang="scss">
  button {
    position: absolute;
    padding: 3px 13px;
    top: 8px;
    left: 16px;
    z-index: 99;
    font-size: 22px;
    border-radius: 5px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    border: 3px solid orange;
    background-color: white;
    transition: all 0.25s;
    &.show {
      box-shadow: none;
    }
  }
</style>
