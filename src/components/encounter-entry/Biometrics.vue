<template lang="html">
  <fieldset>

    <div class="message is-info" v-for="(metric, index) in biometrics">
      <div class="message-header">
        Biometric {{ index + 1 }}
        <a class="delete" @click="deleteDynElement(index)"></a>
      </div>

      <div class="message-body">
        <!-- measurement field -->
        <div class="field">
          <label :for="'measurement' + index" class="label">Measurement
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('measurement' + index) }">
              <select :name="'measurement' + index" required
                      v-model="metric.measurement"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="" disabled>Select Option...</option>
                <option value="age numeric">Age - numeric</option>
                <option value="b. femoris">B. femoris</option>
                <option value="bcs qual">BCS - qual</option>
                <option value="bcs quant">BCS - quant</option>
                <option value="body length">Body Length</option>
                <option value="chest girth">Chest Girth</option>
                <option value="fat thickness">Fat Thickness</option>
                <option value="incisors">Incisors</option>
                <option value="jaw length">Jaw Length</option>
                <option value="l. dorsi">L. dorsi</option>
                <option value="neck circ">Neck Circumfrence</option>
                <option value="tarsus length">Tarsus Length</option>
                <option value="weight">Weight</option>
              </select>
            </div>
            <p class="help">
              What biometric measurement is recorded?
              <span class="help is-danger" v-show="errors.has('measurement' + index)">MEASUREMENT IS REQUIRED</span>
            </p>
          </div>
        </div>
        <!-- value field -->
        <div class="field">
          <label class="label">Value
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="number" class="input" :name="'value' + index" placeholder="25"
                   v-model="metric.value"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('value' + index) }"
                   @change="updateField"
            >
          </div>
          <p class="help">
            What is the value for this measuremnt?
            <span class="help is-danger" v-show="errors.has('value' + index)">
              VALUE IS REQUIRED
            </span>
          </p>
        </div>
        <!-- units field -->
        <div class="field">
          <label class="label">Units
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('units' + index) }">
              <select :name="'units' + index" required
                      v-model="metric.units"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="" disabled selected hidden>Select Option...</option>
                <option value="in">in</option>
                <option value="cm">cm</option>
                <option value="lbs">lbs</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="oz">oz</option>
                <option value="days">days</option>
                <option value="weeks">weekds</option>
                <option value="months">months</option>
                <option value="years">years</option>
              </select>
            </div>
          </div>
          <p class="help">
            What is the units for this measurement?
            <span class="help is-danger" v-show="errors.has('units' + index)">UNITS IS REQUIRED</span>
          </p>
        </div>
        <!-- biometric notes field -->
        <div class="field">
          <label class="label">Comments</label>
          <div class="control">
            <textarea rows="3" class="textarea" v-model="metric.notes" @change="updateField"></textarea>
          </div>
          <p class="help">
            Any notes associated with recording this biometric measurement.
          </p>
        </div>
      </div>
    </div>

    <a class="button is-info is-medium" @click="addDynElement">Add Biometric</a>

  </fieldset>
</template>

<script>
import { cloneDeep } from 'lodash'
import { emptyModel } from '../../util'

export default {
  name: 'Biometrics',

  data () {
    return {
      biometrics: cloneDeep(this.$store.state.encounterEntry.biometrics)
    }
  },

  methods: {
    addDynElement () {
      const model = Object.assign({}, emptyModel(this.biometrics[0], ''))
      this.biometrics.push(model)
      this.updateField()
    },

    deleteDynElement (index) {
      this.biometrics.splice(index, 1)
      this.updateField()
    },

    updateField () {
      this.$store.commit('encounterEntry/updateModel', {
        model: 'biometrics',
        data: cloneDeep(this.biometrics)
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
