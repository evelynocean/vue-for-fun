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

// var recursiveMenu = Vue.extend({
//     name: 'recursive-nemu',
//     template:[
//         '<el-menu v-for="item in items" default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">',
//         // '<template v-for="item in items">recursive-nemu',
//         '<template v-if="is_obj(item.childrenList)">',
//         '<el-submenu index="item.levelKey">',
//         '<template slot="title">{{ item.levelName }}</template>',
//         '<recursive-nemu :items="item.childrenList"></recursive-nemu>',
//         '</el-submenu>',
//         '</template>',
//         '<template v-else>',
//         '<el-menu-item index="item.levelKey">{{ item.levelName }}</el-menu-item>',
//         // '</template>',
//         '</<el-menu>'].join(''),
//     props:{
//         items:''
//         },
//     methods:{
//         handleOpen (key, keyPath) {
//             // console.log(key, keyPath)
//         },
//         handleClose (key, keyPath) {
//             // console.log(key, keyPath)
//         },
//         is_obj:function(val){
//             return Object.prototype.toString.call(val) === '[object Object]'
//         }
//     }
// })
//
// console.log(recursiveMenu);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
