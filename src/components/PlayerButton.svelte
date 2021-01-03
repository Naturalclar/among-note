<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let color: PlayerColor = "Red";
  export let selected = false;

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("click", {
      color,
    });
  }
</script>

<style>
  .selected {
    background-color:palegreen;
  }
  button {
    height: 60px;
    width: 60px;
    border: 3px solid black;
    border-radius: 10px;
    cursor: pointer;
  }
  img {
    object-fit: contain;
    width: 41px;
    height: 41px;
    -webkit-user-drag: none;
  }
</style>

<button type="button" class={selected ? 'selected' : ''} on:click={onClick}>
  <img src="/images/players/{color}.png" alt="Player {color}" />
</button>
