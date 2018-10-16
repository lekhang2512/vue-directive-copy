import Vue from 'vue'
import App from './App.vue'
import Copy from './copy.js'
import './style.css'

Vue.use(Copy)

if (document.querySelector('#my-strictly-unique-vue-directive-copy')) {
  new Vue({
    el: '#my-strictly-unique-vue-directive-copy',
    render: h => h(App)
  })
}

export default Copy
