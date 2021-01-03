<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let map: MapName = "skeld";
  export let selected = false;

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("click", {
      map,
    });
  }
</script>

<style>
  .selected {
    background-color:palegreen;
  }
  button {
    height: 60px;
    width: 120px;
    border: 3px solid black;
    border-radius: 10px;
    cursor: pointer;
  }
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
  }
</style>

<button type="button" class={selected ? 'selected' : ''} on:click={onClick}>
  <img src="/images/logo/{map}.png" alt="{map} logo" />
</button>
