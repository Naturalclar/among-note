<script lang="ts">
  export let color: PlayerColor = "Red";

  let position = { x: 25, y: 25 };

  let offset = { x: 0, y: 0 };

  let isMouseDown = false;

  const handleMouseDown = (event) => {
    isMouseDown = true;
    offset.x = event.clientX;
    offset.y = event.clientY;
  };

  const handleMouseUp = () => {
    isMouseDown = false;
  };

  const handleMouseMove = (event) => {
    if (isMouseDown) {
      position.x += event.clientX - offset.x;
      position.y += event.clientY - offset.y;
      offset.x = event.clientX;
      offset.y = event.clientY;
    }
  };
</script>

<style>
  g {
    cursor: pointer;
  }
</style>

<g
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseUp}
  on:pointerdown={handleMouseDown}
  on:pointerup={handleMouseUp}
  on:pointermove={handleMouseMove}
  >
  <circle r="30" cx={position.x + 20} cy={position.y + 20} fill="transparent" />
  <image
    href="/images/players/{color}.png"
    height="40"
    width="40"
    x={position.x}
    y={position.y} />
</g>
