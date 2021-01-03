<script lang="ts">
  export let map: MapName = "skeld";
</script>

<style>
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
  }
</style>

<img src="/images/map/{map}.png" alt="{map} Map" />
