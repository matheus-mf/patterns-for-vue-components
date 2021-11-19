<template>
  <div>
    <h1>Factory component</h1>
    <ModalFactory component="ModalRegister" />
  </div>
</template>

<script>
import ModalFactory from './components/ModalFactory'

export default {
  name: 'App',
  components: {
    ModalFactory
  }
}
</script>
