<template>
  <section @mousemove="handleEvent">
    <slot :coords="{ x, y }" />
  </section>
</template>

<script>
export default {
  name: 'WithMouse',
  data: () => ({
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5
  }),
  methods: {
    handleEvent (event) {
      const { clientX, clientY } = event
      this.x = clientX
      this.y = clientY
    }
  }
}
</script>
