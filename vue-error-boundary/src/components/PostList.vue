<template>
<h1>Post List</h1>
</template>

<script>

function getPosts () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Api offline'))
    }, 2000)
  })
}

export default {
  name: 'PostList',
  async mounted () {
    const posts = await getPosts()
    console.log('posts', posts)
  }
}
</script>
