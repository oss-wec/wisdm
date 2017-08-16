<template lang="html">
  <fieldset>

    <div class="message is-info" v-for="(med, index) in medications">
      <div class="message-header">
        Medication {{ index + 1}}
        <a class="delete" @click="deleteDynElement(index)"></a>
      </div>

      <div class="message-body">
        <!-- medication field -->
        <div class="field">
          <label class="label">Medication
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('medication' + index) }">
              <select :name="'medication' + index" required
                      v-model="med.medication"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="">Select Option...</option>
                <option value="right">med1</option>
                <option value="left">med2</option>
              </select>
            </div>
          </div>
          <p class="help">
            What medication was administered to this animal?
            <span class="help is-danger" v-show="errors.has('medication' + index)">
              MEDICATION IS REQUIRED
            </span>
          </p>
        </div>
        <!-- time administered field -->
        <div class="field">
          <label class="label">Time Administered
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="time" class="input" :name="'med-time' + index"
                   v-model="med.time"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('med-time' + index) }"
                   @change="updateField"
            >
          </div>
          <p class="help">
            What time was the medication administered?
            <span class="help is-danger" v-show="errors.has('med-time' + index)">TIME ADMINISTERED IS REQUIRED</span>
          </p>
        </div>
        <!-- dose field -->
        <div class="field">
          <label class="label">Dose
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="number" class="input" :name="'med-dose' + index"
                   v-model="med.dose"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('med-dose' + index)  }"
                   @change="updateField"
            >
          </div>
          <p class="help">
            What is the dose of medication administered to this animal?
            <span class="help is-danger" v-show="errors.has('med-dose')">
              DOSE IS REQUIRED AND MUST BE A NUMBER.
            </span>
          </p>
        </div>
        <!-- units field -->
        <div class="field">
          <label class="label">Units
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('med-units' + index) }">
              <select :name="'med-units' + index" required
                      v-model="med.units"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="">Select Option...</option>
                <option value="right">unit1</option>
                <option value="left">unit2</option>
              </select>
            </div>
          </div>
          <p class="help">
            What are the units of this medication dose?
            <span class="help is-danger" v-show="errors.has('med-units' + index)">
              UNITS ARE REQUIRED
            </span>
          </p>
        </div>
        <!-- method field -->
        <div class="field">
          <label class="label">Method
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('med-method' + index) }">
              <select :name="'med-method' + index" required
                      v-model="med.method"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="">Select Option...</option>
                <option value="right">method 1</option>
                <option value="left">method 2</option>
              </select>
            </div>
          </div>
          <p class="help">
            How was this medication administered to the animal?
            <span class="help is-danger" v-show="errors.has('med-method' + index)">
              METHOD IS REQUIRED
            </span>
          </p>
        </div>
        <!-- notes field -->
        <div class="field">
          <label class="label">Medication Notes</label>
          <div class="control">
            <textarea id="" rows="3" class="textarea" v-model="med.notes" @change="updateField"></textarea>
          </div>
          <p class="help">
            Any notes associated with administering this medication.
          </p>
        </div>
      </div>
    </div>

    <a class="button is-info is-medium" @click="addDynElement">Add Medication</a>
    <pre><code>{{ $data }}</code></pre>

  </fieldset>
</template>

<script>
import { cloneDeep } from 'lodash'
import { emptyModel } from '../../util'

export default {
  name: 'Medications',

  data () {
    return {
      medications: cloneDeep(this.$store.state.encounterEntry.medications)
    }
  },

  methods: {
    addDynElement () {
      const model = Object.assign({}, emptyModel(this.medications[0], ''))
      this.medications.push(model)
      this.updateField()
    },

    deleteDynElement (index) {
      this.medications.splice(index, 1)
      this.updateField()
    },

    updateField () {
      this.$store.commit('encounterEntry/updateModel', {
        model: 'medications',
        data: cloneDeep(this.medications)
      })
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
