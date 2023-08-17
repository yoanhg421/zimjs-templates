<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue"
import { Frame, Circle } from "zimjs"

let frame: Frame

onMounted(() => {
  frame = new Frame({
    scaling: "zim",
    width: 600,
    height: 300,
    ready: () => {
      new Circle(50, red).center().drag()
      frame.stage.update()
    },
  })
})

onBeforeUnmount(() => {
  frame.dispose()
})
</script>

<template>
  <div id="zim"></div>
</template>

<style scoped></style>
