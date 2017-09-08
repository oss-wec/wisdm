<template>
    <div class="field">
    <label class="label">{{ fieldLabel }}</label>
    <div class="control">
      <div class="is-fullwidth">
        <Multiselect
              v-model="person"
              :options="users"
              :multiple="true"
              :disabled="disabled"
              :closeOnSelect="false"
              group-values="people"
              group-label="org"
              label="name"
              placeholder="Select People"
              @input="updateValue"
               />
      </div>
    </div>
    <p class="help">{{ helpText }}</p>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { mapGetters } from 'vuex'

export default {
  name: 'SelectPeople',

  components: { Multiselect },

  props: [ 'fieldLabel', 'helpText', 'selected', 'disabled' ],

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
  },

  computed: {
    ...mapGetters({
      users: 'usersByAgency'
    })
  }

}
</script>

<style>
  
</style>
