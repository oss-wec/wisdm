<template lang="html">
  <div class="columns">
    <div class="column is-8 is-offset-2">
      <form>

        <legend class="title">Enter New Animal Encounter</legend>
        <div class="message is-info is-small">
          <div class="message-body">
            <p>Fields denoted with an <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span> are required.</p>
            <p>Fields will validate after moving out of the field. All data will be validated by the server after submission.</p>
          </div>
        </div>

        <button class="button is-info is-outlined" @click="toggle('modal')" style="margin-bottom: 15px;">Module Selection</button>

        <!-- encounter module -->
        <Collapse :visible="modules.encounter.visible" @collapse="toggle('encounter')">
          <p slot="header">Encounter<p>
          <div slot="content">
            <Encounter></Encounter>
          </div>
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

        <Collapse :visible="modules.biometrics.visible" @collapse="toggle('biometrics')" v-if="moduleSelection.biometrics">
          <p slot="header">Biometrics</p>
          <Biometrics slot="content"></Biometrics>
        </Collapse>

        <Collapse :visible="modules.vitals.visible" @collapse="toggle('vitals')" v-if="moduleSelection.vitals">
          <p slot="header">Vitals</p>
          <Vitals slot="content"></Vitals>
        </Collapse>

        <Collapse :visible="modules.samples.visible" @collapse="toggle('samples')" v-if="moduleSelection.samples">
          <p slot="header">Samples</p>
          <Samples slot="content"></Samples>
        </Collapse>

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

      </form>

      <button class="button is-info is-outlined" style="margin: 15px 0;">Submit Encounter</button>

      <pre><code>{{ encounterData }}</code></pre> 

      <ModalContents :visible="modules.modal.visible" @visible="toggle('modal')" />

    </div>
  </div>

</template>

<script>
import Collapse from './Collapse'
import Encounter from './encounter-entry/Encounter'
import Marks from './encounter-entry/Marks'
import Devices from './encounter-entry/Devices'
import Biometrics from './encounter-entry/Biometrics'
import Vitals from './encounter-entry/Vitals'
import Samples from './encounter-entry/Samples'
import Injuries from './encounter-entry/Injuries'
import Medications from './encounter-entry/Medications'
import Mortality from './encounter-entry/Mortality'
import Necropsy from './encounter-entry/Necropsy'
import ModalContents from './ModalContents'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'NewAnimal',
  components: {
    Collapse,
    Encounter,
    Marks,
    Devices,
    Biometrics,
    Vitals,
    Samples,
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
      }
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
    }
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
</style>
