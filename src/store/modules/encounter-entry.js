const state = {
  animal: {
    ndow_id: '',
    species: '',
    sex: ''
  },
  encounter: {
    project: '',
    status: '',
    age: '',
    event_date: '',
    enc_method: '',
    enc_reason: '',
    comments: ''
  }
}

const getters = {
  speciesDropdown (state, getters, rootState, rootGetters) {
    return rootState.species.map(s => {
      return {
        id: s.id,
        common_name: s.common_name
      }
    })
  }
}

const mutations = {
  updateAnimal (state, payload) {
    Object.assign(state[payload.model], payload.data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
