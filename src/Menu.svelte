<script lang="ts">
  import { fly } from "svelte/transition";
  import { dateString } from "./stores/date";
  import { showMenu } from "./stores/menu";
  import { yearsToLive } from "./stores/years";
</script>

{#if $showMenu}
  <aside transition:fly={{ x: -250 }}>
    <h1>A visual representation of your life, in weeks</h1>
    <p>Set your birth date and expected life length.</p>
    <p>Get how many weeks you have lived, and how many you have left...</p>
    <fieldset>
      <div class="date">
        <label for="birthDate">Date of Birth:</label>
        <input type="date" name="birthDate" bind:value={$dateString} />
      </div>
      <div class="years">
        <label for="lifeYears">Years to Live</label>
        <div class="yearsInputs">
          <button type="button" on:click={yearsToLive.increment}>+</button>
          <input
            type="number"
            name="lifeYears"
            bind:value={$yearsToLive}
            min="0"
            max="100" />
          <button type="button" on:click={yearsToLive.decrement}>-</button>
        </div>
      </div>
    </fieldset>
  </aside>
{/if}

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
    padding-top: 22px;
    box-shadow: 2px 0 5px 5px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
    h1 {
      font-size: 1.3rem;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 20px;
    }
    fieldset {
      padding: 0;
      margin: 0;
      margin-top: 40px;
      border: none;
      display: flex;
      flex-direction: column;
      gap: 20px;
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 50px;
        }
      }
    }
  }
</style>
