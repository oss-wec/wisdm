import { cloneDeep } from 'lodash'
import { emptyModel } from '../../util'
// import { findById } from '../../api'

const correctDates = (ar) => {
  const data = cloneDeep(ar)
  data.forEach(d => {
    Object.keys(d).forEach(k => {
      if (k === 'date_given' || k === 'date_removed' || k === 'capture_time' || k === 'start_time' || k === 'end_time') {
        let valid = new Date(d[k])
        d[k] = !(valid.valueOf()) ? undefined : valid
      }
    })
  })
  return data
}

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
    reencounter: '',
    comments: ''
  },
  handling: {
    capture_time: '',
    start_time: '',
    end_time: '',
    enc_method: '',
    enc_reason: ''
  },
  locations: {
    x: '',
    y: '',
    location: '',
    relocated: '',
    rel_x: '',
    rel_y: '',
    rel_location: ''
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
  labids: null,
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
    handling: true,
    marks: false,
    devices: false,
    biometrics: false,
    vitals: false,
    samples: false,
    injuries: false,
    medications: false,
    mortality: false,
    necropsy: false
  },
  recap: null
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
    const encounter = { ...state.encounter, ...state.handling, ...state.locations }
    const structure = {
      animal_id: animal.animal_id,
      species_id: animal.species_id.id,
      sex: animal.sex,
      Event: {
        project_id: encounter.project_id.id,
        status: encounter.status,
        reencounter: encounter.reencounter,
        age: encounter.age,
        event_date: encounter.event_date,
        comments: encounter.comments,
        enc_method: encounter.enc_method,
        enc_reason: encounter.enc_reason,
        capture_time: encounter.capture_time,
        start_time: encounter.start_time,
        end_time: encounter.end_time,
        x: encounter.x,
        y: encounter.y,
        location: encounter.location,
        relocated: encounter.relocated,
        rel_x: encounter.rel_x,
        rel_y: encounter.rel_y,
        rel_location: encounter.rel_location
      }
    }

    if (modules.marks) structure.Marks = correctDates(state.marks)
    if (modules.devices) structure.Devices = correctDates(state.devices)
    if (modules.biometrics) structure.Event.Biometrics = state.biometrics
    if (modules.vitals) structure.Event.Vitals = state.vitals
    if (modules.samples) structure.Event.Samples = state.samples
    if (state.labids) structure.Event.LabIds = state.labids
    if (modules.injuries) structure.Event.Injuries = state.injuries
    if (modules.medications) structure.Event.Medications = state.medications
    if (modules.mortality) structure.Event.Mortality = state.mortality
    if (modules.necropsy) structure.Event.Necropsy = state.necropsy

    return structure
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
  },

  getRecap ({ commit }, payload) {
    console.log(payload)
  //   findById(payload.id)
  //     .then(recap => commit('setRecap', { data: recap.data }))
  //     .catch(err => console.log(err))
  // }
    commit('setRecap', { data: payload.data })
    commit('updateModel', {
      model: 'marks',
      data: payload.marks
    })
    commit('updateModel', {
      model: 'devices',
      data: payload.devices
    })
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
    state.handling = payload.newState.handling
    state.locations = payload.newState.locations
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
  },

  setRecap (state, payload) {
    state.recap = payload.data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
