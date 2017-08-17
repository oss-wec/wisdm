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

        <!-- encounter module -->
        <Collapse :visible="modules.encounter.visible" @collapse="toggle('encounter')">
          <p slot="header">Encounter<p>
          <div slot="content">
            <Encounter></Encounter>
          </div>
        </Collapse>
        <!-- marks module -->
        <Collapse :visible="modules.marks.visible" @collapse="toggle('marks')">
          <p slot="header">Marks</p>
          <Marks slot="content"></Marks>
        </Collapse>
        <!-- devices module -->
        <Collapse :visible="modules.devices.visible" @collapse="toggle('devices')">
          <p slot="header">Devices</p>
          <Devices slot="content"></Devices>
        </Collapse>

        <Collapse :visible="modules.biometrics.visible" @collapse="toggle('biometrics')">
          <p slot="header">Biometrics</p>
          <Biometrics slot="content"></Biometrics>
        </Collapse>

        <Collapse :visible="modules.vitals.visible" @collapse="toggle('vitals')">
          <p slot="header">Vitals</p>
          <Vitals slot="content"></Vitals>
        </Collapse>

        <Collapse :visible="modules.samples.visible" @collapse="toggle('samples')">
          <p slot="header">Samples</p>
          <Samples slot="content"></Samples>
        </Collapse>

        <Collapse :visible="modules.injuries.visible" @collapse="toggle('injuries')">
          <p slot="header">Injuries</p>
          <Injuries slot="content"></Injuries>
        </Collapse>

        <Collapse :visible="modules.medications.visible" @collapse="toggle('medications')">
          <p slot="header">Medications</p>
          <Medications slot="content"></Medications>
        </Collapse>

        <Collapse :visible="modules.mortality.visible" @collapse="toggle('mortality')">
          <p slot="header">Mortality</p>
          <Mortality slot="content"></Mortality>
        </Collapse>

        <Collapse :visible="modules.necropsy.visible" @collapse="toggle('necropsy')">
          <p slot="header">Necropsy</p>
          <Necropsy slot="content"></Necropsy>
        </Collapse>

      </form>

      <pre><code>{{ encounterEvent }}</code></pre> 

      <div class="modal" :class="{ 'is-active': modules.modal.visible }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Select Data Entry Modules</p>
            <button class="delete" aria-label="close" @click="toggle('modal')"></button>
          </header>
          <section class="modal-card-body">
            <ModalContents />
          </section>
          <footer class="modal-card-foot">
            <button class="button is-info">Go!</button>
            <p>To select a module, click on the icon for that module</p>
          </footer>
        </div>
      </div>

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
// import { mapState } from 'vuex'

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
    }
  },

  methods: {
    toggle (module) {
      this.modules[module].visible = !this.modules[module].visible
    }
  }
}
</script>

<style lang="css" scoped>
</style>
