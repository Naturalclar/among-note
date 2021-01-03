<script lang="ts">
  import MapButton from "../components/MapButton.svelte";
  import MapImage from "../components/MapImage.svelte";
  import Margin from "../components/Margin.svelte";
  import Section from "../components/Section.svelte";

  let selectedMap: MapName = "skeld";

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
  .mapContainer {
    position: relative;
    height: 400px;
  }
  .image {
    position: absolute;
    z-index: 1;
  }
  .svgContainer {
    width: "100%";
    z-index: 2;
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
    <div class="mapContainer">
      <div class="image">
        <MapImage map={selectedMap} />
      </div>
      <div class="svgContainer">
        <svg width="100%" viewBox="0 0 400 560" >
          <image href="/images/players/Red.png" height="40" width="40" />
        </svg>
      </div>
    </div>
  </div>
</Section>
