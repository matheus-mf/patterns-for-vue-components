<template>
  <div>
    <CustomHeader/>
    <CustomContent/>
    <CustomFooter/>
  </div>
</template>

<script>
import services from './services'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { setCurrentUser } from './stores/user'
import { setLoading, setError, setPosts } from './stores/posts'

export default {
  name: 'App',
  components: {
    CustomHeader: Header,
    CustomContent: Content,
    CustomFooter: Footer
  },
  async mounted () {
    setTimeout(async () => {
      try {
        setLoading(true)
        setError(false)
        const { data: posts } = await services.posts.getAll()
        setPosts(posts)
      } catch (err) {
        setError(!!err)
      } finally {
        setLoading(false)
      }
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
