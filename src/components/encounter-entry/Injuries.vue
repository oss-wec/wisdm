<template lang="html">
  <fieldset>

    <div class="message is-info" v-for="(injury, index) in injuries">
      <div class="message-header">
        Injury {{ index + 1}}
        <a class="delete" @click="deleteDynElement(index)"></a>
      </div>

      <div class="message-body">
        <!-- side field -->
        <div class="field">
          <label class="label">Side
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('injury-side' + index) }">
              <select :name="'injury-side' + index" required
                      v-model="injury.side"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="">Select Option...</option>
                <option value="right">Right</option>
                <option value="left">Left</option>
              </select>
            </div>
          </div>
          <p class="help">
            On which side of the animal is the injury?
            <span class="help is-danger" v-show="errors.has('injury-side' + index)">
              INJURY SIDE IS REQUIRED
            </span>
          </p>
        </div>
        <!-- location field -->
        <div class="field">
          <label class="label">Location
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('injury-location' + index) }">
              <select :name="'injury-location' + index" required
                      v-model="injury.location"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="">Select Option...</option>
                <option value="head">Head</option>
                <option value="neck">Neck</option>
                <option value="front leg">Front Leg</option>
                <option value="torso">Torso</option>
                <option value="hind leg">Hind Leg</option>
                <option value="wing">Wing</option>
              </select>
            </div>
          </div>
          <p class="help">
            Where on the animal is the injury located?
            <span class="help is-danger" v-show="errors.has('injury-location' + index)">
              INJURY LOCATION IS REQUIRED
            </span>
          </p>
        </div>
        <!-- type field -->
        <div class="field">
          <label class="label">Type
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('injury-type' + index) }">
              <select :name="'injury-type' + index" required
                      v-model="injury.type"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="">Select Option...</option>
                <option value="abrasion">Abrasion</option>
                <option value="contusion">Contusion</option>
                <option value="fracture">Fracture</option>
                <option value="laceration">Laceration</option>
                <option value="puncture">Puncture</option>
              </select>
            </div>
          </div>
          <p class="help">
            Wha type of injury does this animal have?
            <span class="help is-danger" v-show="errors.has('injury-type' + index)">
            INJURY TYPE IS REQUIRED
            </span>
          </p>
        </div>
        <!-- description field -->
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea id="" rows="3" class="textarea" v-model="injury.description" @change="updateField"></textarea>
          </div>
          <p class="help">
            A thurough description of the injury.
          </p>
        </div>
        <!-- treatment field -->
        <div class="field">
          <label class="label">Treatment</label>
          <div class="control">
            <textarea id="" rows="3" class="textarea" v-model="injury.treatment" @change="updateField"></textarea>
          </div>
          <p class="help">
            How was this injury treated?
          </p>
        </div>
      </div>
    </div>

    <a class="button is-info is-medium" @click="addDynElement">Add Vitals</a>

  </fieldset>
</template>

<script>
import { cloneDeep } from 'lodash'
import { emptyModel } from '../../util'

export default {
  name: 'Injury',

  data () {
    return {
      injuries: cloneDeep(this.$store.state.encounterEntry.injuries)
    }
  },

  methods: {
    addDynElement () {
      const model = Object.assign({}, emptyModel(this.injuries[0], ''))
      this.injuries.push(model)
      this.updateField()
    },

    deleteDynElement (index) {
      this.injuries.splice(index, 1)
      this.updateField()
    },

    updateField () {
      this.$store.commit('encounterEntry/updateModel', {
        model: 'injuries',
        data: cloneDeep(this.injuries)
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
