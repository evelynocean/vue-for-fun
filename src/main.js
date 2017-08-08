import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import IconSvg from 'components/Icon-svg'
// import '../theme/index.css'
import App from './App'
import router from './router'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import store from './store'
import { getToken } from 'utils/auth'
// 设置语言
locale.use(lang)

Vue.component('icon-svg', IconSvg)
Vue.use(ElementUI)

// set routers
if (getToken()) {
  store.dispatch('GenerateRoutes').then(() => {
      router.addRoutes(store.getters.addRouters)
    })
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
