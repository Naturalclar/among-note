<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let label = "";

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch('click', event);
  }

</script>

<style>
  button {
    border: 3px solid black;
    border-radius: 10px;
    background-color: transparent;
    cursor: pointer;
  }
  p {
    font-family: "InYourFace";
    font-size: 3em;
    vertical-align: text-bottom;
  }
</style>

<button type="button" on:click={onClick}> <p>{label}</p> </button>
