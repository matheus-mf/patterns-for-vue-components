import axios from 'axios'
import PostService from './posts'

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default {
  posts: PostService(httpClient)
}
