<script lang="ts">
  import PlayerButton from "../components/PlayerButton.svelte";
  import Section from "../components/Section.svelte";
  import { players } from "../stores";

  let players_value: Players;

  players.subscribe((value) => {
    players_value = value;
  });

  function handleSelect(event: PlayerSelectEvent) {
    const color = event.detail.color;
    players.update((updater) => ({ ...updater, [color]: !updater[color] }));
  }

  const colors: PlayerColor[] = [
    "Black",
    "Blue",
    "Brown",
    "Cyan",
    "Green",
    "Lime",
    "Orange",
    "Pink",
    "Purple",
    "Red",
    "White",
    "Yellow",
  ];
</script>

<style>
  .selections {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
</style>

<Section label="Players">
  <div class="selections">
    {#each colors as color}
      <PlayerButton
        {color}
        on:click={handleSelect}
        selected={players_value[color]} />
    {/each}
  </div>
</Section>
