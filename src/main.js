import Vue from 'vue'
import '../theme/index.css'
import ElementUI from 'element-ui'
import App from './App'
import SideTop from './components/SideTop'
import SideMenuList from './components/SideMenuList'
import SideContent from './components/SideContent'
import PageContent from './components/PageContent'
import MainContent from './components/MainContent'
import recursiveMenu from './components/menuList'
import router from './router'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import store from './vuex/store'

// 设置语言
locale.use(lang)

Vue.use(ElementUI)

Vue.component('side-top', SideTop)
Vue.component('side-menu-list', SideMenuList)
Vue.component('side-content', SideContent)
Vue.component('page-content', PageContent)
Vue.component('main-content', MainContent)
Vue.component('recursive-menu', recursiveMenu)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
