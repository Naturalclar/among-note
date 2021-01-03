<script lang="ts">
  import MapButton from "../components/MapButton.svelte";
  import MapImage from "../components/MapImage.svelte";
  import Margin from "../components/Margin.svelte";
  import Section from "../components/Section.svelte";
  import PlayerMarker from "../components/PlayerMarker.svelte";
  import { players, getSelected } from "../stores/players";

  let selectedMap: MapName = "skeld";

  let selectedPlayer: PlayerColor[] = [];

  players.subscribe((value) => {
    selectedPlayer = getSelected(value);
  });

  const handleSelect = (event: MapSelectEvent) => {
    selectedMap = event.detail.map;
  };
</script>

<style>
  .selection {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  svg {
    pointer-events: none;
  }
</style>

<Section label="Map">
  <div>
    <div class="selection">
      <MapButton
        map="skeld"
        selected={selectedMap === 'skeld'}
        on:click={handleSelect} />
      <MapButton
        map="mirahq"
        selected={selectedMap === 'mirahq'}
        on:click={handleSelect} />
      <MapButton
        map="polus"
        selected={selectedMap === 'polus'}
        on:click={handleSelect} />
    </div>
    <Margin size={24} />

    <svg viewBox="0 0 560 400" />
      <MapImage map={selectedMap} />
      {#each selectedPlayer as color}
        {#key color}
          <PlayerMarker {color} />
        {/key}
      {/each}
    </svg>
  </div>
</Section>
