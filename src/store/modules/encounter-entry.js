const state = {
  animal: {
    ndow_id: '',
    project: '',
    sex: ''
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
  updateAnimal (state, animal) {
    Object.assign(state.animal, animal)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
