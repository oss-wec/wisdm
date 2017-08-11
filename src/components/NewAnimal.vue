<template lang="html">
  <div class="columns">
    <div class="column is-8 is-offset-2">
      <form>

        <legend class="title">Enter New Project Information</legend>
        <div class="message is-info is-small">
          <div class="message-body">
            A project is a way to logically group animals into collections. Each project should have several animals and correspond to an actual on the ground capture event. Occasionally a project can be a longer term effort. For instance, collecting hunter harvest samples.
          </div>
        </div>

        <div class="message is-warning is-small">
          <div class="message-body">
            All fields in this form are required.
          </div>
        </div>

        <Collapse :visible="modules.encounter.visible" @collapse="toggle('encounter')">
          <p slot="header">Encounter<p>
          <div slot="content">
            <Encounter></Encounter>
          </div>
        </Collapse>

        <Collapse :visible="modules.marks.visible" @collapse="toggle('marks')">
          <p slot="header">Marks</p>
          <Marks slot="content"></Marks>
        </Collapse>

      </form>
    </div>
  </div>

</template>

<script>
import Collapse from './Collapse'
import Encounter from './Encounter'
import Marks from './Marks'

export default {
  name: 'NewAnimal',
  components: {
    Collapse,
    Encounter,
    Marks
  },

  data () {
    return {
      modules: {
        encounter: {
          visible: true
        },
        marks: {
          visible: false
        }
      }
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
