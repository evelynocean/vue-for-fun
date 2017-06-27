import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Page1Content from '@/components/Page1Content'
import Page1 from '@/page/page1'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/AA',
    component: Page1
    // children: [
    //   { path: '/BB', component: Page1Content },
    //   { path: '/bb2', component: Hello },
    //   { path: '/CC', component: Hello }
    // ]
  }, {
    path: '/BB',
    component: Hello
  }, {
    path: '/bb2',
    component: Page1Content
  }, {
    path: '/CC',
    component: Hello
  }
  ]
})
