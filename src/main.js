
import Vue from 'vue'
import App from './App'
import SideNav from './components/SideNav'
import router from './router'

Vue.component('side-nav', SideNav)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
