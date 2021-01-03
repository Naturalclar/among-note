<script lang="ts">
  export let color: PlayerColor = "Red";

  let position = { x: 0, y: 0 };

  let offset = { x: 0, y: 0 };

  let isMouseDown = false;

  const handleMouseDown = event => {
    isMouseDown = true;
    offset.x = event.clientX;
    offset.y = event.clientY;
  };

  const handleMouseUp = event => {
    isMouseDown = false;
  };

  const handleMouseMove = event => {
    if (isMouseDown) {
      position.x += event.clientX - offset.x;
      position.y += event.clientY - offset.y;
      offset.x = event.clientX;
      offset.y = event.clientY;
    }
  };
</script>

<image
  href="/images/players/{color}.png"
  height="40"
  width="40"
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseUp}
  x={position.x}
  y={position.y} />
