import { cloneDeep } from 'lodash'
import { emptyModel } from '../../util'

const state = {
  animal: {
    animal_id: '',
    species_id: '',
    sex: ''
  },
  encounter: {
    project_id: '',
    status: '',
    age: '',
    event_date: '',
    enc_method: '',
    enc_reason: '',
    comments: ''
  },
  marks: [
    {
      mark_type: '',
      mark_id: '',
      mark_color: '',
      mark_location: '',
      date_given: '',
      date_removed: ''
    }
  ],
  devices: [
    {
      type: '',
      serial_num: null,
      frequency: null,
      inservice: null,
      outservice: null
    }
  ],
  biometrics: [
    {
      measurement: '',
      value: '',
      units: '',
      notes: ''
    }
  ],
  vitals: [
    {
      time_rec: '',
      measurement: '',
      value: '',
      notes: ''
    }
  ],
  samples: [
    {
      sample: '',
      destination: '',
      notes: ''
    }
  ],
  injuries: [
    {
      injury_side: '',
      injury_location: '',
      injury_type: '',
      injury_description: '',
      injury_treatment: ''
    }
  ],
  medications: [
    {
      medication: '',
      med_time: '',
      med_dose: '',
      med_unit: '',
      med_method: '',
      med_notes: ''
    }
  ],
  mortality: {
    investigator: null,
    carcass_age: '',
    cause_of_death: '',
    certainty_of_cause: '',
    description: null,
    mort_date: null,
    femur_index: '',
    gross_diagnoses: null,
    histological_diagnoses: null
  },
  necropsy: {
    necropsy_date: null,
    general_condition: null,
    integument: null,
    musculoskeletal: null,
    body_cavities: null,
    hemolymphatic: null,
    respiratory: null,
    cardiovascular: null,
    digestive: null,
    urinary: null,
    reproductive: null,
    endocrine: null,
    nervous: null,
    sensory: null,
    lab_studies: null
  },
  moduleSelection: {
    marks: false,
    devices: false,
    biometrics: false,
    vitals: false,
    samples: false,
    injuries: false,
    medications: false,
    mortality: false,
    necropsy: false
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
  },

  encounterData (state) {
    const modules = state.moduleSelection
    const animal = state.animal
    const encounter = state.encounter
    const structure = {
      animal_id: animal.animal_id,
      species_id: animal.species_id.id,
      sex: animal.sex,
      Encounters: {
        project_id: encounter.project_id.id,
        status: encounter.status,
        age: encounter.age,
        event_date: encounter.event_date,
        enc_method: encounter.enc_method,
        enc_reason: encounter.enc_reason,
        comments: encounter.comments
      }
    }

    if (modules.marks) structure.Marks = state.marks
    if (modules.devices) structure.Devices = state.devices
    if (modules.biometrics) structure.Encounters.Biometrics = state.biometrics
    if (modules.vitals) structure.Encounters.Vitals = state.vitals
    if (modules.samples) structure.Encounters.Samples = state.samples
    if (modules.injuries) structure.Encounters.Injuries = state.injuries
    if (modules.medications) structure.Encounters.Medications = state.medications
    if (modules.mortality) structure.Encounters.Mortality = state.mortality
    if (modules.necropsy) structure.Encounters.Necropsy = state.necropsy

    return structure

    // const modules = state.moduleSelection
    // const data = {
    //   animal: cloneDeep(state.animal),
    //   encounter: cloneDeep(state.encounter)
    // }

    // data.animal.species_id = data.animal.species_id.id
    // data.encounter.project_id = data.encounter.project_id.id

    // if (modules.marks) data.marks = state.marks
    // if (modules.devices) data.devices = state.devices
    // if (modules.biometrics) data.biometrics = state.biometrics
    // if (modules.vitals) data.vitals = state.vitals
    // if (modules.samples) data.samples = state.samples
    // if (modules.injuries) data.injuries = state.injuries
    // if (modules.medications) data.medications = state.medications
    // if (modules.mortality) data.mortality = state.mortality
    // if (modules.necropsy) data.necropsy = state.necropsy

    // return data
  }
}

const actions = {
  resetData ({ commit }) {
    const data = cloneDeep(state)
    const newState = {}

    for (let k in state) {
      if (k === 'moduleSelection') {
        newState[k] = emptyModel(data[k], false)
      } else {
        if (Array.isArray(state[k])) {
          newState[k] = new Array(emptyModel(data[k][0], ''))
        } else {
          newState[k] = emptyModel(data[k], '')
        }
      }
    }

    commit('resetData', { newState: newState })
  }
}

const mutations = {
  updateAnimal (state, payload) {
    Object.assign(state[payload.model], payload.data)
  },

  updateModel (state, payload) {
    // Object.assign(state[payload.model], payload.data)
    state[payload.model] = payload.data
  },

  toggleModuleSelection (state, module) {
    state.moduleSelection[module] = !state.moduleSelection[module]
  },

  preConfigForm (state, payload) {
    state.moduleSelection = payload
  },

  resetData (state, payload) {
    state.animal = payload.newState.animal
    state.encounter = payload.newState.encounter
    state.marks = payload.newState.marks
    state.devices = payload.newState.devices
    state.biometrics = payload.newState.biometrics
    state.vitals = payload.newState.vitals
    state.samples = payload.newState.samples
    state.injuries = payload.newState.injuries
    state.medications = payload.newState.medications
    state.necropsy = payload.newState.necropsy
    state.mortality = payload.newState.mortality
    state.moduleSelection = payload.newState.moduleSelection
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
