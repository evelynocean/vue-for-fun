import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: MainContent,
        children: [
            { path: '/name_1', component: Hello },
            { path: '/name_3', component: Hello },
            { path: '/name_5', component: Hello }
        ]
    }]
})