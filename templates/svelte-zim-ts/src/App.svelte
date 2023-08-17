<script lang="ts">
  import { Frame, Circle } from "zimjs"

  import { onMount, onDestroy } from "svelte"

  let frame: Frame

  onMount(() => {
    frame = new Frame({
      scaling: "zim",
      width: 600,
      height: 300,
      ready: () => {
        new Circle(50, red).center().drag()
      },
    })
  })

  onDestroy(() => {
    frame?.dispose()
  })
</script>

<main>
  <div id="zim" />
</main>

<style>
</style>
