import { cloneDeep } from 'lodash'

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
    const data = {
      animal: cloneDeep(state.animal),
      encounter: cloneDeep(state.encounter)
    }

    data.animal.species_id = data.animal.species_id.id
    data.encounter.project_id = data.encounter.project_id.id

    if (modules.marks) data.marks = state.marks
    if (modules.devices) data.devices = state.devices
    if (modules.biometrics) data.biometrics = state.biometrics
    if (modules.vitals) data.vitals = state.vitals
    if (modules.samples) data.samples = state.samples
    if (modules.injuries) data.injuries = state.injuries
    if (modules.medications) data.medications = state.medications
    if (modules.mortality) data.mortality = state.mortality
    if (modules.necropsy) data.necropsy = state.necropsy

    return data
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
