<template>
  <div class="field">
    <label class="label">{{ fieldLabel }}</label>
    <div class="control">
      <div class="is-fullwidth">
        <Multiselect
              v-model="selected"
              :options="options"
              :multiple="false"
              :closeOnSelect="true"
              trackBy="id"
              label="projectName"
              :searchable="true"
              placeholder="Select Parent Project"
              @input="updateValue"
        />
      </div>
    </div>
    <!-- <p class="help">{{ helpText }}</p> -->
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { getProjects } from '../../api'

export default {
  name: 'SelectProjects',

  components: { Multiselect },

  props: [ 'fieldLabel', 'multiple', 'close' ],

  data () {
    return {
      selected: null,
      options: []
    }
  },

  methods: {
    updateValue () {
      this.$emit('input', this.selected)
    }
  },

  mounted: function () {
    getProjects()
      .then(response => {
        this.options = response.data.data
          .filter(f => {
            return f.proj_type === 'project'
          })
          .map(m => {
            return {
              id: m.id,
              projectName: m.proj_name
            }
          })
          .sort((a, b) => {
            let aa = a.projectName.toUpperCase()
            let bb = b.projectName.toUpperCase()

            if (aa < bb) return -1
            if (aa > bb) return 1
            return 0
          })
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>
