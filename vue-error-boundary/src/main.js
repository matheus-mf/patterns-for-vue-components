import Vue from 'vue'
import App from './App.vue'
import service from './services'
import global from './global'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$services', {
  get () {
    return service
  },
  set () {
    throw new Error('You cannot set $services')
  }
})
Object.defineProperty(Vue.prototype, '$g', {
  get () {
    return global
  },
  set () {
    throw new Error('You cannot set $g')
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
