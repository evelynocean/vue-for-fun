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
        path: '/default',
        component: Layout,
        name: 'Default',
        // icon: 'quanxian',
        // noDropdown: true,
        children: [
            { path: '', component: _import('system/index'), name: 'Default' }
        ]
    },
    {
        path: '/system',
        component: Layout,
        name: 'System',
        // icon: 'quanxian',
        // noDropdown: true,
        children: [
            { path: 'page1', component: _import('system/page1'), name: 'System - 1' },
            { path: 'page2', component: _import('system/page2'), name: 'System - 2' }
        ]
    },
    {
        path: '/anomaly',
        component: Layout,
        name: 'Anomaly',
        children: [{ path: 'page1', component: _import('anomaly/page1'), name: 'Anomaly - 1' },
            { path: 'page2', component: _import('anomaly/page2'), name: 'Anomaly - 2' }
        ]
    },
    {
        path: '/dashboard',
        component: Layout,
        redirect: '/dashboard/index',
        name: 'Dashboard',
        children: [{ path: 'index', component: _import('dashboard/index'), name: 'Dashboard' }]
    },
    {
        path: '/snapshot',
        component: Layout,
        redirect: '/snapshot',
        name: 'Snapshot',
        noDropdown: true,
        children: [{ path: '', component: _import('dashboard/index'), name: 'Snapshot' }]
    },
    { path: '*', redirect: '/404', hidden: true }
]