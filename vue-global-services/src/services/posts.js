import global from '../global'

export default (httpClient) => ({
  async getAll () {
    global.loading.show()
    const response = await httpClient.get('/posts')
    global.loading.hide()
    return response
  }
})
