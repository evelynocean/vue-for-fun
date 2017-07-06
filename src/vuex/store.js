import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import table from './modules/table'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu,
    table
  }
})

export default store
