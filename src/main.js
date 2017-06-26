import Vue from 'vue'
import App from './App'
import SideTop from './components/SideTop'
import SideMenuList from './components/SideMenuList'
import SideContent from './components/SideContent'
import PageContent from './components/PageContent'
import MainContent from './components/MainContent'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-cn', // 語言標識
  messages: {
    'zh-cn': require('../static/lang/zh_cn'), // 中文語言包
    'zh-tw': require('../static/lang/zh_tw'), // 中文語言包
    'en-us': require('../static/lang/en_us') // 英文語言包
  }
})

Vue.component('side-top', SideTop)
Vue.component('side-menu-list', SideMenuList)
Vue.component('side-content', SideContent)
Vue.component('page-content', PageContent)
Vue.component('main-content', MainContent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
