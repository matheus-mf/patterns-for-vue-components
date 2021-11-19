import Vue from 'vue'

export function NewGlobalEvent (eventName = '') {
  const bus = new Vue()
  const name = `global-${eventName}-event`

  function generic (action) {
    bus.$emit(name, action)
  }

  function show (payload = true) {
    generic({ type: 'SHOW', payload })
  }

  function hide (payload = false) {
    generic({ type: 'HIDE', payload })
  }

  function off () {
    bus.$off(name)
  }

  function onToggle (callback) {
    bus.$on(name, callback)
  }

  return {
    show,
    hide,
    off,
    onToggle
  }
}

export default {
  loading: NewGlobalEvent('loading'),
  modal: NewGlobalEvent('modal'),
  toast: NewGlobalEvent('toast')
}
