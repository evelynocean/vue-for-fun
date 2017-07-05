import portal from '../index'

const state = {
  items: []
}

const actions = {
  getMenu ({commit}) {
    portal.getmenu(function (res) {
      commit('GETMENU', {res})
    })
  }
};

const mutations = {
  GETMENU (state, {res}) {
    state.items = res
  }
}

export default {
  state,
  actions,
  mutations
}