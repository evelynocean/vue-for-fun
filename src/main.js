import Vue from 'vue'
import '../theme/index.css'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
//import store from './store'
import store from './vuex/store'
// 设置语言
locale.use(lang)

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})