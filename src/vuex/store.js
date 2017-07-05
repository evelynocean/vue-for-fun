import Vue from 'vue'
import Vuex from 'vuex'
// import user from './modules/user'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu
  }
})

export default store
