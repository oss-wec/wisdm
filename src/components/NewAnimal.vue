<template lang="html">
  <div class="columns">
    <div class="column is-8 is-offset-2">
      <form id="newEncounter">

        <legend class="title">Enter New Animal Encounter</legend>
        <div class="message is-info is-small">
          <div class="message-body">
            <p>Fields denoted with an <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span> are required.</p>
            <p>Fields will validate after moving out of the field. All data will be validated by the server after submission.</p>
          </div>
        </div>

        <button class="button is-info is-outlined" @click.prevent="toggle('modal')" style="margin-bottom: 15px;">Module Selection</button>

        <!-- encounter module -->
        <Collapse :visible="modules.encounter.visible" @collapse="toggle('encounter')">
          <p slot="header">Encounter<p>
          <div slot="content">
            <Encounter></Encounter>
          </div>
        </Collapse>
        <!-- handling module -->
        <Collapse :visible="modules.handling.visible" @collapse="toggle('handling')">
          <p slot="header">Handling</p>
          <Handling slot="content" />
        </Collapse>
        <!-- locations module -->
        <Collapse :visible="modules.locations.visible" @collapse="toggle('locations')">
          <p slot="header">Locations</p>
          <Locations slot="content" />
        </Collapse>
        <!-- marks module -->
        <Collapse :visible="modules.marks.visible" @collapse="toggle('marks')" v-if="moduleSelection.marks">
          <p slot="header">Marks</p>
          <Marks slot="content"></Marks>
        </Collapse>
        <!-- devices module -->
        <Collapse :visible="modules.devices.visible" @collapse="toggle('devices')" v-if="moduleSelection.devices">
          <p slot="header">Devices</p>
          <Devices slot="content"></Devices>
        </Collapse>
        <!-- biometrics module -->
        <Collapse :visible="modules.biometrics.visible" @collapse="toggle('biometrics')" v-if="moduleSelection.biometrics">
          <p slot="header">Biometrics</p>
          <Biometrics slot="content"></Biometrics>
        </Collapse>
        <!-- vitals module -->
        <Collapse :visible="modules.vitals.visible" @collapse="toggle('vitals')" v-if="moduleSelection.vitals">
          <p slot="header">Vitals</p>
          <Vitals slot="content"></Vitals>
        </Collapse>
        <!-- samples -->
        <Collapse :visible="modules.samples.visible" @collapse="toggle('samples')" v-if="moduleSelection.samples">
          <p slot="header">Samples</p>
          <Samples slot="content"></Samples>
        </Collapse>
        <!-- lab id module -->
        <Collapse :visible="modules.labids.visible" @collapse="toggle('labids')" v-if="moduleSelection.samples">
          <p slot="header">Lab IDs</p>
          <LabIds slot="content"></LabIds>
        </Collapse>
        <!-- injuries module -->
        <Collapse :visible="modules.injuries.visible" @collapse="toggle('injuries')" v-if="moduleSelection.injuries">
          <p slot="header">Injuries</p>
          <Injuries slot="content"></Injuries>
        </Collapse>

        <Collapse :visible="modules.medications.visible" @collapse="toggle('medications')" v-if="moduleSelection.medications">
          <p slot="header">Medications</p>
          <Medications slot="content"></Medications>
        </Collapse>

        <Collapse :visible="modules.mortality.visible" @collapse="toggle('mortality')" v-if="moduleSelection.mortality">
          <p slot="header">Mortality</p>
          <Mortality slot="content"></Mortality>
        </Collapse>

        <Collapse :visible="modules.necropsy.visible" @collapse="toggle('necropsy')" v-if="moduleSelection.necropsy">
          <p slot="header">Necropsy</p>
          <Necropsy slot="content"></Necropsy>
        </Collapse>

        <button class="button is-info is-outlined" style="margin: 15px 0;" @click.prevent="submit">Submit Encounter</button>
      </form>

      <!-- <div class="notification is-warning" v-if="error">
        <ul>
          <li v-for="err in error.response.data">
            {{ err.message }}
          </li>
        </ul>
      </div> -->

      <article class="message is-warning" v-if="error">
        <div class="message-header">
          <p>Please fix the following errors:</p>
        </div>
        <div class="message-body">
          <ol>
            <li v-for="err in error.response.data">
              {{ err.message }}
            </li>
          </ol>
        </div>
      </article>

      <article class="message is-primary">
        <div class="message-header">
          <p>DEBUG DATA: below is the data structure sent to database</p>
        </div>
        <div class="message-body">
          <pre><code>{{ encounterData }}</code></pre>
        </div>
      </article> 

      <ModalContents :visible="modules.modal.visible" @visible="toggle('modal')" />

    </div>
  </div>

</template>

<script>
import Collapse from './Collapse'
import Encounter from './encounter-entry/Encounter'
import Handling from './encounter-entry/Handling'
import Locations from './encounter-entry/Locations'
import Marks from './encounter-entry/Marks'
import Devices from './encounter-entry/Devices'
import Biometrics from './encounter-entry/Biometrics'
import Vitals from './encounter-entry/Vitals'
import Samples from './encounter-entry/Samples'
import LabIds from './encounter-entry/LabIds'
import Injuries from './encounter-entry/Injuries'
import Medications from './encounter-entry/Medications'
import Mortality from './encounter-entry/Mortality'
import Necropsy from './encounter-entry/Necropsy'
import ModalContents from './ModalContents'
import { mapState, mapGetters } from 'vuex'
import { createEncounter } from '../api'
import router from '../router'

export default {
  name: 'NewAnimal',

  components: {
    Collapse,
    Encounter,
    Handling,
    Locations,
    Marks,
    Devices,
    Biometrics,
    Vitals,
    Samples,
    LabIds,
    Injuries,
    Medications,
    Mortality,
    Necropsy,
    ModalContents
  },

  data () {
    return {
      modules: {
        encounter: {
          visible: true
        },
        handling: {
          visible: false
        },
        locations: {
          visible: false
        },
        marks: {
          visible: false
        },
        devices: {
          visible: false
        },
        biometrics: {
          visible: false
        },
        vitals: {
          visible: false
        },
        samples: {
          visible: false
        },
        labids: {
          visible: false
        },
        injuries: {
          visible: false
        },
        medications: {
          visible: false
        },
        mortality: {
          visible: false
        },
        necropsy: {
          visible: false
        },
        modal: {
          visible: true
        }
      },
      error: null
    }
  },

  computed: {
    encounterEvent () {
      return this.$store.state.encounterEntry
    },

    ...mapState('encounterEntry', [
      'moduleSelection'
    ]),

    ...mapGetters('encounterEntry', [
      'encounterData'
    ])
  },

  methods: {
    toggle (module) {
      this.modules[module].visible = !this.modules[module].visible
    },

    submit () {
      createEncounter(this.encounterData)
      .then(() => {
        router.push({ path: '/animal-log' })
      })
      // .then(() => this.$store.dispatch('encounterEntry/resetData'))
      .catch(error => {
        console.log(error)
        this.error = error
      })
    }
  },

  destroyed () {
    this.$store.dispatch('encounterEntry/resetData')
  }
}
</script>

<style lang="css" scoped>
  button.btn-main {
    margin-bottom: 10px;
    background-color: #269E7F;
    color: #fff;
  }

  button.btn-main:hover {
    background-color: #269e7a;
  }

  legend {
    margin-top: 20px;
  }

  li {
    margin-left: 15px;
  }
</style>
