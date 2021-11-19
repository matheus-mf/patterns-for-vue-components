<template>
<div v-if="status">
  <p>Loading...</p>
</div>
</template>

<script>
export default {
  name: 'Loading',
  data: () => ({
    status: false
  }),
  created () {
    this.$g.loading.onToggle(({ payload }) => {
      this.status = payload
    })
  },
  destroyed () {
    this.$g.off()
  }
}
</script>

<style scoped>
div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  color: white;
  font-weight: 800;
  font-size: 2rem;
}
</style>
