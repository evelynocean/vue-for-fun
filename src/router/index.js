import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_production')

Vue.use(Router)

/* layout */
// import Layout from '../views/layout/Layout'

export const routerMap = [
    { path: '/login', component: _import('login/index'), hidden: true },
  {
    path: '/',
    component: _import('login/index'),
    redirect: '/login',
    name: 'login',
    hidden: true
  },
  {
    path: '/test',
    component: '',
    redirect: '/test',
    name: '預設頁',
    hidden: true,
    children: [{ path: 'test', component: _import('test/index') }]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})

// export const asyncRouterMap = [

// ]
