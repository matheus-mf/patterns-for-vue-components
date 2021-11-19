<template>
  <div id="app">
    <h1>Scoped Slots</h1>
    <button @click="handleChangeTypeScopedSlot('QueryRenderer')" :disabled="typeScopedSlot === 'QueryRenderer'">QueryRenderer</button>
    <button @click="handleChangeTypeScopedSlot('WithMouse')" :disabled="typeScopedSlot === 'WithMouse'">WithMouse</button>

    <QueryRenderer v-if="typeScopedSlot === 'QueryRenderer'" entity="posts" action="getAll">
      <template v-slot="{ data: posts, hasError, isLoading }">
        <p v-if="isLoading">Loading...</p>
        <p v-if="hasError">Something wrong isn't right!</p>

        <div v-if="posts.length && !hasError && !isLoading">
          <ul>
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
          </ul>
        </div>
      </template>
    </QueryRenderer>

    <WithMouse v-else>
      <template v-slot="{coords}">
        <div class="circle" :style="{
          left: `${coords.x - 75 }px`,
          top: `${coords.y - 75 }px`,
        }"/>
      </template>
    </WithMouse>
  </div>
</template>

<script>
import QueryRenderer from './components/QueryRenderer'
import WithMouse from './components/WithMouse'

export default {
  name: 'App',
  data: () => ({
    typeScopedSlot: 'QueryRenderer'
  }),
  methods: {
    handleChangeTypeScopedSlot (typeScopedSlot) {
      this.typeScopedSlot = typeScopedSlot
    }
  },
  components: {
    QueryRenderer,
    WithMouse
  }
}
</script>

<style>
@keyframes blink {
  from {
    background-color: tomato;
  }
  to {
    background-color: cyan;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}

.circle {
  position: absolute;
  background-color: tomato;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: blink 400ms ease-in infinite;
}
</style>
