<template>
  <div>
    <Loading/>
    <CustomHeader/>
    <CustomContent/>
    <CustomFooter/>
  </div>
</template>

<script>
import Loading from './components/Loading'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { setCurrentUser } from './stores/user'
import { setLoading, setError, setPosts } from './stores/posts'

export default {
  name: 'App',
  components: {
    Loading,
    CustomHeader: Header,
    CustomContent: Content,
    CustomFooter: Footer
  },
  async mounted () {
    try {
      setLoading(true)
      // this.$g.loading.show()
      setError(false)
      const { data: posts } = await this.$services.posts.getAll()
      setPosts(posts)
    } catch (err) {
      setError(!!err)
    } finally {
      setLoading(false)
      // this.$g.loading.hide()
    }

    setTimeout(() => {
      setCurrentUser({
        id: '123',
        name: 'John Doe',
        email: 'johndoe@example.com'
      })
      console.log('setCurrentUser dispatched')
    }, 2000)
  }
}
</script>
