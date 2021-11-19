<template>
  <div>
    <Loading />
    <CustomHeader />
    <CustomContent />
    <CustomFooter />
    <ErrorBoundary :fallback="fallbackComponent">
      <PostList />
    </ErrorBoundary>
  </div>
</template>

<script>
import Loading from './components/Loading'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import PostList from './components/PostList'
import ErrorBoundary from './components/ErrorBoundary'
import Fallback from './components/Fallback'
import { setCurrentUser } from './stores/user'

export default {
  name: 'App',
  data: () => ({
    fallbackComponent: Fallback
  }),
  components: {
    ErrorBoundary,
    Loading,
    CustomHeader: Header,
    CustomContent: Content,
    CustomFooter: Footer,
    PostList
  },
  async mounted () {
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
