<template>
  <component :is="component" />
</template>

<script>
import ModalLogin from './ModalLogin'
import ModalRegister from './ModalRegister'

export default {
  name: 'ModalFactory',
  components: { ModalLogin, ModalRegister },
  props: {
    component: {
      type: status,
      required: true
    }
  }
}
</script>
