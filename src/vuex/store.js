import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import table from './modules/table'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        menu,
        table,
        user
    }
})

export default store