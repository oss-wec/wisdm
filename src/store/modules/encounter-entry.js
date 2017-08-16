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
  },
  marks: [
    {
      mark_type: '',
      mark_id: '',
      mark_color: '',
      mark_loc: '',
      given: '',
      removed: ''
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
      time: '',
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
      side: '',
      location: '',
      type: '',
      description: '',
      treatment: ''
    }
  ],
  medications: [
    {
      medication: '',
      time: '',
      dose: '',
      units: '',
      method: '',
      notes: ''
    }
  ],
  mortality: {
    investigator: null,
    carcass_age: '',
    cause: '',
    certainty: '',
    mort_description: null,
    mort_date: null,
    femur_index: '',
    gross_diagnosis: null,
    histological_diagnosis: null
  },
  necropsy: {
    necropsy_date: null,
    condition: null,
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
  },

  updateModel (state, payload) {
    // Object.assign(state[payload.model], payload.data)
    state[payload.model] = payload.data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
