import portal from '../index'

const state = {
  items: []
}

const actions = {
  Login ({ commit }) {
      portal.apilogin(function (res) {
          commit('LOGIN', { res })
        })
    }
}

const mutations = {
  LOGIN (state, { res }) {
      state.items = res
    }
}

export default {
  state,
  actions,
  mutations
}
