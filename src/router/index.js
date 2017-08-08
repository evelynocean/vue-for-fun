import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_production')

Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout'
import Test from 'views/test/index'

export const routerMap = [
    { path: '/login', component: _import('login/index'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/system',
    name: '首页',
    hidden: true,
    children: [{ path: 'index', component: _import('system/index'), name: 'System' }]
  },
  {
    path: '/test',
    component: Test,
    name: '預設頁',
    hidden: true,
    children: [{ path: 'test', component: _import('test/index') }]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})

export const asyncRouterMap = [{
  path: '/system',
  component: Layout,
  name: 'System',
  icon: 'quanxian',
  noDropdown: true,
  children: [{ path: 'index', component: _import('system/index'), name: 'System' }]
},
{
  path: '/anomaly',
  component: Layout,
  redirect: '/anomaly/index',
  name: 'Anomaly',
  icon: 'zujian',
  children: [
            { path: 'index', component: _import('anomaly/index'), name: 'Anomaly' },
            { path: 'page1', component: _import('anomaly/page1'), name: 'Anomaly - 1' },
            { path: 'page2', component: _import('anomaly/page2'), name: 'Anomaly - 2' }
        ]
},
{
  path: '/dashboard',
  component: Layout,
  redirect: '/dashboard/index',
  name: 'Dashboard',
  icon: 'tubiaoleixingzhengchang',
  children: [{ path: 'index', component: _import('dashboard/index'), name: 'Dashboard' }]
},
    { path: '*', redirect: '/404', hidden: true }
]
