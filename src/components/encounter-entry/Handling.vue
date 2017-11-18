<template lang="html">
  <fieldset>

    <!-- encounter method input -->
    <div class="field">
      <label for="enc-method" class="label">Encounter Method
        <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
      </label>
      <div class="control">
        <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('enc-method') }">
          <select name="enc-method" 
                  @change="updateField('handling')"
                  v-model="handling.enc_method"
                  v-validate="'required'"
                  required
          >
            <option value="" disabled>Select Option...</option>
            <option value="basecamp">Basecamp</option>
            <option value="capture crew">Capture Crew</option>
            <option value="marked observation">Marked Observation</option>
            <option value="unmarked observation">Unmarked Observation</option>
            <option value="marked mortality">Marked Mortality</option>
            <option value="unmarked mortality">Unmarked Mortality</option>
          </select>
        </div>
      </div>
      <p class="help">
        What method was used to encounter the animal?
        <span class="help is-danger" v-show="errors.has('enc-method')">ENCOUNTER METHOD IS REQUIRED</span>
      </p>
    </div>

    <!-- encounter reason input -->
    <div class="field">
      <label for="enc-reason" class="label">Encounter Reason
        <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
      </label>
      <div class="control">
        <div class="select is-fullwidth">
          <select name="enc-reason" 
                  @change="updateField('handling')"
                  v-model="handling.enc_reason"
                  required
          >
            <option value="" disabled>Select Option...</option>
            <option value="disease surveilance">Disease Surveilance</option>
            <option value="incidental">Incidental Encounter</option>
            <option value="population monitoring">Population Monitoring</option>
            <option value="translocation">Translocation</option>
          </select>
        </div>
      </div>
      <p class="help">
        What is the reason for encountering this animal?
      </p>
    </div>
    
    <div class="field">
      <label for="capture_time" class="label">Capture Time</label>
      <div class="control">
        <input  type="time"
                value="00:00:00"
                class="input"
                name="capture_time"
                v-model="handling.capture_time"
                @change="updateField('handling')"
        >
      </div>
      <p class="help">
        What time was the animal captured?
      </p>
    </div>

    <div class="field">
      <label for="start_time" class="label">Start Time</label>
      <div class="control">
        <input  type="time"
                value="00:00:00"
                class="input"
                name="start_time"
                v-model="handling.start_time"
                @change="updateField('handling')"
        >
      </div>
      <p class="help">
        What time did we begin processing the animal?
      </p>
    </div>

    <div class="field">
      <label for="start_time" class="label">End Time</label>
      <div class="control">
        <input  type="time"
                value="00:00:00"
                class="input"
                name="start_time"
                v-model="handling.end_time"
                @change="updateField('handling')"
        >
      </div>
      <p class="help">
        What time did we finish processing the animal?
      </p>
    </div>

    <!-- <pre><code>{{ formatData }}</code></pre> -->

  </fieldset>  
</template>

<script>
import { cloneDeep } from 'lodash'
import { rmFalsy } from '../../util'

export default {
  name: 'Handling',

  data () {
    return {
      handling: cloneDeep(this.$store.state.encounterEntry.handling)
    }
  },

  computed: {
    formatData () {
      return rmFalsy(this.handling)
    }
  },

  methods: {
    updateField (model) {
      this.$store.commit('encounterEntry/updateModel', {
        model: model,
        data: this.formatData
      })
    }
  }
}
</script>

<style scoped lang="css">
fieldset {
  border-width: 0;
}
</style>
