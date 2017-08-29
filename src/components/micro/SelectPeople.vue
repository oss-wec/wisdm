<template>
    <div class="field">
    <label class="label">{{ fieldLabel }}</label>
    <div class="control">
      <div class="is-fullwidth">
        <Multiselect
              v-model="person"
              :options="options"
              :multiple="true"
              group-values="people"
              group-label="org"
              placeholder="Select Collaborators"
              @input="updateValue"
               />
      </div>
    </div>
    <p class="help">{{ helpText }}</p>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'SelectPeople',

  components: { Multiselect },

  props: [ 'fieldLabel', 'helpText', 'selected' ],

  data () {
    return {
      person: null,
      options: [
        {
          org: 'NDOW',
          people: [ 'Cody', 'Mike', 'Chris', 'Pat' ]
        }, {
          org: 'USGS',
          people: [ 'Kathy', 'Bob', 'Charles' ]
        }, {
          org: 'NPS',
          people: [ 'Bryan', 'Jade', 'Kristy' ]
        }
      ]
    }
  },

  methods: {
    updateValue () {
      this.$emit('input', this.person)
    }
  }

}
</script>

<style>
  
</style>
