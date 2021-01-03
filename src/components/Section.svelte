<script lang="ts">
  export let label: string = "";
</script>

<style>
  section {
    position: relative;
    border: 3px solid black;
    border-radius: 10px;
    padding: 2em 1em 1em 1em;
  }
  h1 {
    position: absolute;
    top: -0.5em;
    left: 0.25em;
    background: white;
    padding: 0 16px;
    font-family: "InYourFace";
    font-size: 2em;
  }
</style>

<section>
  <h1>{label}</h1>
  <slot />
</section>
