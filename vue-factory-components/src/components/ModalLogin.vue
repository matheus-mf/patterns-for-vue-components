<template>
  <section>
    <article>
      <h1>Modal Login</h1>
    </article>
  </section>
</template>

<script>
export default {
  name: 'ModalLogin'
}
</script>

<style scoped>
section {
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

article {
  width: 600px;
  height: 400px;
  background-color: #f4f4f4;
}
</style>
