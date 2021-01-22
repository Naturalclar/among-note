<script lang="ts">
  import Section from "../components/Section.svelte";

  export let color: PlayerColor = "Red";
  let isDead = false;
  let usedButton = false;
  let memo = "";
</script>

<Section label={color}>
  <div class="container">
    <div class="imageContainer">
      {#if isDead}
        <img src="/images/dead/{color}.png" alt="Player {color} Dead" />
      {:else}<img src="/images/players/{color}.png" alt="Player {color}" />{/if}
    </div>
    <div>
      <div class="checkContainer">
        <div>
          <label for="button-{color}"> Button </label>
          <input
            id="button-{color}"
            type="checkbox"
            bind:checked={usedButton}
          />
        </div>
        <div>
          <label for="dead-{color}"> Dead </label>
          <input id="dead-{color}" type="checkbox" bind:checked={isDead} />
        </div>
      </div>
      <label for="memo-{color}"> Memo </label>
      <textarea id="memo-{color}" bind:value={memo} />
    </div>
  </div>
</Section>

<style>
  .container {
    display: flex;
    gap: 16px;
  }
  .imageContainer {
    height: 60px;
    width: 60px;
  }
  img {
    object-fit: contain;
    width: 60px;
    height: 60px;
    -webkit-user-drag: none;
  }
  label {
    font-family: "InYourFace";
    font-size: 2em;
    cursor: pointer;
  }
  textarea {
    resize: none;
    width: 180px;
    height: 200px;
  }

  .checkContainer {
    display: flex;
    justify-content: space-around;
  }
</style>
