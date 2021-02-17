<script>
  import { showMenu, yearsToLive, dateString } from "./stores";
</script>

<aside class:show={$showMenu}>
  <fieldset>
    <label for="birthDate">
      Date of Birth:
      <input type="date" name="birthDate" bind:value={$dateString} />
    </label>
    <label for="lifeYears">
      Years to Live:
      <input
        type="number"
        name="lifeYears"
        bind:value={$yearsToLive}
        min="0"
        max="100"
      />
    </label>
  </fieldset>
</aside>

<!-- I made scss work! 🎊 (https://daveceddia.com/svelte-with-sass-in-vscode/) -->
<style lang="scss">
  aside {
    width: 250px;
    height: 90vh;
    top: 5vh;
    left: 0;
    border-radius: 0 10px 10px 0;
    position: absolute;
    background: white;
    padding: 12px;
    padding-top: 82px;
    transform: translateX(-250px);
    box-shadow: 2px 0 5px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    &.show {
      transform: translateX(0);
    }
  }
  fieldset {
    padding: 0;
    border: none;
    height: 25px;
  }
</style>
