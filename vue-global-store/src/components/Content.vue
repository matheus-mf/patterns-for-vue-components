<template>
  <div>
    <p v-if="hasError">An error happened</p>
    <p v-if="isLoading">Loading...</p>

    <template v-if="posts.length && !isLoading">
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </template>

    <p v-if="!posts.length && !isLoading">
    There are no posts :(
    </p>
  </div>
</template>

<script>
import { getPosts, isLoading, hasError } from '../stores/posts'

export default {
  name: 'Content',
  computed: {
    posts: getPosts,
    isLoading: isLoading,
    hasError: hasError
  }
}
</script>
