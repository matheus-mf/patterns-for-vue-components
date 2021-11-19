import Vue from 'vue'
import App from './App.vue'
import service from '../services'

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$services', {
  get () {
    return service
  },
  set () {
    throw new Error('You cannot set $services')
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
