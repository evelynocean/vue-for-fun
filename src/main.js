import Vue from 'vue'
import App from './App'
import SideTop from './components/SideTop'
import SideMenuList from './components/SideMenuList'
import SideContent from './components/SideContent'
import MainContent from './components/MainContent'
import router from './router'

Vue.component('side-top', SideTop)
Vue.component('side-menu-list', SideMenuList)
Vue.component('side-content', SideContent)
Vue.component('main-content', MainContent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})