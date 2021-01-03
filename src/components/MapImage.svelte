<script lang="ts">
  export let map: MapName = "skeld";
</script>

<style>
  image {
    object-fit: contain;
    width: 100%;
    height: 400;
    -webkit-user-drag: none;
  }
</style>

<image href="/images/map/{map}.png" alt="{map} Map" x={0} y={0} />
