import Vue from 'vue'
import Router from 'vue-router'
import Page1Content from '@/components/Page1Content'
import Page1 from '@/page/page1'
import Table from '@/page/Table'
import Form from '@/page/Form'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/AA',
    component: Table
    // children: [
    //   { path: '/BB', component: Page1Content },
    //   { path: '/bb2', component: Hello },
    //   { path: '/CC', component: Hello }
    // ]
  }, {
    path: '/BB',
    component: Form
  }, {
    path: '/bb2',
    component: Page1Content
  }, {
    path: '/CC',
    component: Page1
  }
  ]
})
