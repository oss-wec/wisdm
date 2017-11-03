<template>
  <fieldset>

    <!-- x input -->
    <div class="field">
      <label for="x" class="label">Longitude
        <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
      </label>
      <div class="control">
        <input  type="number" 
                class="input" 
                name="x"
                v-model="locations.x"
                v-validate="'required'"
                :class="{ 'is-danger': errors.has('x') }"
                @change="updateField('locations')"
        >
      </div>
      <p class="help">
        What date was the animal encounterd?
        <span class="help is-danger" v-show="errors.has('x')">LONGITUDE IS REQUIRED</span>
      </p>
    </div>

    <!-- y input -->
    <div class="field">
      <label for="y" class="label">Latitude
        <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
      </label>
      <div class="control">
        <input  type="number" 
                class="input" 
                name="y"
                v-model="locations.y"
                v-validate="'required'"
                :class="{ 'is-danger': errors.has('y') }"
                @change="updateField('locations')"
        >
      </div>
      <p class="help">
        What is the latitude of the capture location?
        <span class="help is-danger" v-show="errors.has('y')">LATITUDE IS REQUIRED</span>
      </p>
    </div>

    <!-- location input -->
    <div class="field">
      <label for="location" class="label">Location Description</label>
      <div class="control">
        <input  type="text"
                class="input"
                name="location"
                v-model="locations.location"
                @change="updateField('location')"
        >
      </div>
    </div>
  
  </fieldset>
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  name: 'Locations',

  data () {
    return {
      locations: cloneDeep(this.$store.state.encounterEntry.locations)
    }
  },

  methods: {
    updateField (model) {
      this.$store.commit('encounterEntry/updateModel', {
        model: model,
        data: cloneDeep(this[model])
      })
    }
  }
}
</script>

<style>
fieldset {
  border-width: 0;
}
</style>
