<template lang="html">
  <fieldset>

    <div class="message is-info" v-for="(vital, index) in vitals">
      <div class="message-header">
        Vitals {{ index + 1 }}
        <a class="delete" @click="deleteDynElement(index)"></a>
      </div>

      <div class="message-body">
        <!-- time recorded -->
        <div class="field">
          <label class="label">Time Recorded
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="time" class="input" :name="'vital-time' + index"
                   v-model="vital.time"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('vital-time' + index) }"
            >
          </div>
          <p class="help">
            What time was the vital recorded?
            <span class="help is-danger" v-show="errors.has('vital-time' + index)">TIME RECORDED IS REQUIRED</span>
          </p>
        </div>
        <!-- measurement field -->
        <div class="field">
          <label class="label">Measurement
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('vital-measure' + index) }">
              <select :name="'vital-measure' + index" required
                      v-model="vital.measurement"
                      v-validate="'required'"
              >
                <option value="">Select Option...</option>
                <option value="heart rate">Heart Rate</option>
                <option value="resp rate">Respiratory Rate</option>
                <option value="temp">Temperature</option>
              </select>
            </div>
          </div>
          <p class="help">
            What vital sign was recorded?
            <span class="help is-danger" v-show="errors.has('vital-measure' + index)">
              MEASUREMENT IS REQUIRED
            </span>
          </p>
        </div>
        <!-- vital value field -->
        <div class="field">
          <label class="label">Value
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="number" class="input" :name="'vital-value' + index"
                   v-model="vital.value"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('vital-value' + index)  }"
            >
          </div>
          <p class="help">
            What is the value of the vital sign recorded?
            <span class="help is-danger" v-show="errors.has('vital-value')">
              VALUE IS REQUIRED AND MUST BE A NUMBER.
            </span>
          </p>
        </div>
        <!-- vital notes -->
        <div class="field">
          <label class="label">Vital Notes</label>
          <div class="control">
            <textarea id="" rows="3" class="textarea" v-model="vital.notes"></textarea>
          </div>
          <p class="help">
            Any notes associated with the recording of this vital sign.
          </p>
        </div>
      </div>
    </div>

    <a class="button is-info is-medium" @click="addDynElement">Add Vitals</a>
    <pre><code>{{ $data }}</code></pre>

  </fieldset>
</template>

<script>
import { emptyModel } from '../util'

export default {
  name: 'Vitals',

  data () {
    return {
      vitals: [
        {
          time: null,
          measurement: '',
          value: null,
          notes: null
        }
      ]
    }
  },

  methods: {
    addDynElement () {
      this.vitals.push(emptyModel(this.vitals[0]))
    },

    deleteDynElement (index) {
      this.vitals.splice(index, 1)
    }
  }
}
</script>

<style lang="css" scoped>
select:required:invalid {
  color: gray;
}
option[value=""][disabled] {
  display: none;
}
option {
  color: black;
}

fieldset {
  border-width: 0;
}
</style>
