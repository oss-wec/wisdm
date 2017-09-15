<template>
  <div class="field">
    <label class="label">{{ fieldLabel }}</label>
    <div class="control">
      <div class="is-fullwidth">
        <Multiselect
              v-model="species"
              :options="options"
              :multiple="multiple"
              :closeOnSelect="close"
              trackBy="id"
              label="commonName"
              :searchable="true"
              placeholder="Select Species"
              @input="updateValue"
        />
      </div>
    </div>
    <p class="help">Select species from the dropdown.</p>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { getSpecies } from '../../api'

export default {
  name: 'SelectSpecies',

  components: { Multiselect },

  props: [ 'fieldLabel', 'multiple', 'close' ],

  data () {
    return {
      species: null,
      options: []
    }
  },

  methods: {
    updateValue () {
      if (this.multiple) {
        this.$emit('input', this.species.map(m => {
          return { species_id: m.id }
        }))
      } else {
        this.$emit('input', this.species)
      }
    }
  },

  mounted: function () {
    getSpecies()
      .then(response => {
        this.options = response.data.data
        .map(m => {
          return {
            id: m.id,
            speciesName: m.species_name,
            commonName: m.common_name
          }
        })
        .sort((a, b) => {
          let aa = a.commonName.toUpperCase()
          let bb = b.commonName.toUpperCase()
          if (aa < bb) {
            return -1
          }
          if (aa > bb) {
            return 1
          }
          return 0
        })
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>
