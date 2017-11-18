const state = {
  animal: {},
  encounter: {}
}

const getters = { }

const actions = { }

const mutations = {
  refreshModel (state, payload) {
    state[payload.model] = payload.data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

