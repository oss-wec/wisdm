const state = {
  animal: {
    ndowId: '',
    project: ''
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
