<script>
export default {
  name: 'QueryRenderer',
  props: {
    entity: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    payload: {
      type: [Object, Array],
      required: false,
      default: () => ({})
    }
  },
  data: () => ({
    data: [],
    isLoading: false,
    hasError: false
  }),
  async created () {
    try {
      this.isLoading = true
      if (!this.$services[this.entity]) {
        throw new Error('Entity not found')
      }
      if (!this.$services[this.entity][this.action]) {
        throw new Error('Action not found')
      }

      const { data: response } = await this.$services[this.entity][this.action](this.payload)

      this.data = response
    } catch (err) {
      this.hasError = !!err
    } finally {
      this.isLoading = false
    }
  },
  render (createElement) {
    const slot = this.$scopedSlots.default({
      data: this.data,
      isLoading: this.isLoading,
      hasError: this.hasError
    })

    return createElement('div', slot)
  }
}
</script>
