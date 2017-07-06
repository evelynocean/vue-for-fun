import portal from '../index'

const state = {
  dataList: []
}

const actions = {
  getTable ({commit}) {
    portal.gettable(function (res) {
      commit('GETTABLE', {res})
    })
  }
}

const mutations = {
  GETTABLE (state, {res}) {
    state.dataList = res
  }
}

export default {
  state,
  actions,
  mutations
}
