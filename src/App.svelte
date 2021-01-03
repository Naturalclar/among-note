<script lang="ts">
  import Button from "./components/Button.svelte";
  import Header from "./compositions/Header.svelte";
  import Margin from "./components/Margin.svelte";
  import MapSection from "./compositions/MapSection.svelte";
  import PlayerSelect from "./compositions/PlayerSelect.svelte";
  import PlayerState from "./compositions/PlayerState.svelte";
  import { reset, players, getSelected } from "./stores/players";
import Footer from "./compositions/Footer.svelte";

  let selected: PlayerColor[] = [];

  players.subscribe((value) => {
    selected = getSelected(value);
  });
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 480px;
    margin: 0 auto;
  }
  .playerStates {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (min-width: 640px) {
    main {
      max-width: 640px;
    }
  }
</style>

<div>
  <Header/>
  <main>
    <Button label="Reset" on:click={reset} />
    <PlayerSelect />
    <Margin size={24} />
    <MapSection />
    <Margin size={24} />
    <div class="playerStates">
      {#each selected as color}
        {#key color}
          <PlayerState {color} />
        {/key}
      {/each}
    </div>
  </main>
  <Footer/>
</div>
