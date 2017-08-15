import Vue from 'vue'
import Vuex from 'vuex'
import { getSpecies, getAnimals } from '../api'
import encounterEntry from './modules/encounter-entry.js'

Vue.use(Vuex)

const state = {
  species: [],

  speciesByGroup: [],

  animals: []
}

const getters = {
  speciesGroups: state => {
    let groups = [...new Set(state.species.map(s => {
      return s.grouping
    }))].sort()
    let arr = []

    groups.forEach(g => {
      let species = state.species.filter(v => v.grouping === g)
      arr.push({
        name: g,
        species: species,
        numSpecies: species.length
      })
    })

    return arr
  }
}

const actions = {
  getSpecies ({ commit }) {
    getSpecies()
    .then(response => commit('setSpecies', { species: response.data.data }))
  },

  changeGroup ({ commit }, payload) {
    commit('setSpeciesByGroup', { group: payload.group })
  },

  getAnimals ({ commit }) {
    getAnimals()
    .then(response => commit('setAnimals', { animals: response.data.data }))
  }
}

const mutations = {
  setSpecies (state, { species }) {
    state.species = species
  },

  setSpeciesByGroup (state, payload) {
    state.speciesByGroup = payload.group
  },

  setAnimals (state, payload) {
    state.animals = payload.animals
  }
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
  modules: {
    encounterEntry
  }
})
