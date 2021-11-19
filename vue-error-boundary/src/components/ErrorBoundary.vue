<script>
export default {
  name: 'ErrorBoundary',
  data: () => ({
    hasError: null,
    component: null
  }),
  props: {
    fallback: {
      type: Object,
      required: true
    }
  },
  errorCaptured (err) {
    this.hasError = true
    console.log('capture : ', err)
    this.$emit('error-captured', { err })
  },
  render (createElement) {
    if (this.hasError) {
      return createElement(this.fallback)
    }
    return this.$slots.default
  }
}
</script>
