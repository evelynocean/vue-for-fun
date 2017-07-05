import Vue from 'vue'
import Router from 'vue-router'
import Page1Content from '@/components/Page1Content'
import Page1 from '@/page/page1'
import Table from '@/page/Table'
import Form from '@/page/Form'
import menuTree from '@/page/menuTree'
import Markdown from '@/page/Markdown'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/markdown',
    component: Markdown
  }, {
    path: '/bb/bb1',
    component: Form
  }, {
    path: '/table',
    component: Table
  }, {
    path: '/cc/cc2/cc21',
    component: Page1
  }, {
    path: '/cc/cc2/cc22',
    component: Page1Content
  }, {
    path: '/menutree',
    component: menuTree
  }, {
    path: '/ee/ee1/ee1',
    component: Table
  }
  ]
})
