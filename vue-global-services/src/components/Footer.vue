<template>
  <div>
    <h1>Footer</h1>

    <p v-if="hasUserLogged">No users logged in</p>
    <p v-else>Logged in user: {{currentUser.name}}</p>
  </div>
</template>

<script>
import { getCurrentUser } from '../stores/user'

export default {
  name: 'Footer',
  computed: {
    hasUserLogged () {
      return !this.currentUser.id
    },
    currentUser: getCurrentUser
  }
}
</script>

<style scoped>
div {
  display: flex;
  padding: .5rem;
  border: 1px solid red;
  justify-content: space-between;
  align-items: center;
}

h1 {
  color: purple;
}
</style>
