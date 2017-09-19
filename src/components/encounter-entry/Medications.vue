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
                <option value="" disabled>Select Option...</option>
                <option value="aluspray">Aluspray</option>
                <option value="atipamezole">Atipamezole</option>
                <option value="azaperone">Azaperone</option>
                <option value="bam">BAM</option>
                <option value="BoSe">BoSe</option>
                <option value="butorphanol">Butorphanol</option>
                <option value="catron">Catron</option>
                <option value="draxxin">Draxxin</option>
                <option value="e300">E300</option>
                <option value="eprinectin">Eprinectin</option>
                <option value="exede">Exede</option>
                <option value="haloperidol">Haloperidol</option>
                <option value="ivomec">Ivomec</option>
                <option value="ketamine">Ketamine</option>
                <option value="lidocaine 2%">Lidocaine 2%</option>
                <option value="longrange">LongRange</option>
                <option value="midazolam">Midazolam</option>
                <option value="naltrexone">Naltrexone</option>
                <option value="normasol ph 7.4">Normasol pH 7.4</option>
                <option value="NuFlor">NuFlor</option>
                <option value="oxygen">Oxygen</option>
                <option value="pentobarbitol">Pentobarbitol</option>
                <option value="plasmalyte">Plasmalyte</option>
                <option value="saline">Saline</option>
                <option value="telazol">Telazol</option>
                <option value="xylazine">Xylazine</option>
                <option value="zactran">Zactran</option>
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
                   v-model="med.med_time"
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
                   v-model="med.med_dose"
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
                      v-model="med.med_unit"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="" disabled>Select Option...</option>
                <option value="mg">mg</option>
                <option value="ml">ml</option>
                <option value="cc">cc</option>
                <option value="g">g</option>
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
                      v-model="med.med_method"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="" disabled>Select Option...</option>
                <option value="im">IM</option>
                <option value="iv">IV</option>
                <option value="sq">SQ</option>
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
            <textarea id="" rows="3" class="textarea" v-model="med.med_notes" @change="updateField"></textarea>
          </div>
          <p class="help">
            Any notes associated with administering this medication.
          </p>
        </div>
      </div>
    </div>

    <a class="button is-info is-medium" @click="addDynElement">Add Medication</a>

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
