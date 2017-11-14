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
        What is the longitude of the capture location?
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
                @change="updateField('locations')"
        >
      </div>
      <p class="help">
        Short description of the capture location. e.g. North Muddy Mountains.
      </p>
    </div>

    <!-- relocation -->
    <div class="field">
      <label for="relocated" class="label">Relocated</label>
      <div class="control">
        <div class="select is-fullwidth">
          <select   name="relocated"
                    v-model="locations.relocated"
                    @change="updateField('locations')"
          >
            <option value="" disabled>Select Option...</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </div>
      <p class="help">
        Was this animal relocated to a new location?
      </p>
    </div>

    <!-- rel x input -->
    <div class="field" v-if="locations.relocated == 'yes'">
      <label for="rel_x" class="label">Release Longitude
      </label>
      <div class="control">
        <input  type="number" 
                class="input" 
                name="rel_x"
                v-model="locations.rel_x"
                @change="updateField('locations')"
        >
      </div>
      <p class="help">
        What is the longitude for the release location?
      </p>
    </div>

    <!-- y input -->
    <div class="field" v-if="locations.relocated == 'yes'">
      <label for="y" class="label">Release Latitude
      </label>
      <div class="control">
        <input  type="number" 
                class="input" 
                name="rel_y"
                v-model="locations.rel_y"
                @change="updateField('locations')"
        >
      </div>
      <p class="help">
        What is the latitude of the release location?
      </p>
    </div>

    <!-- location input -->
    <div class="field" v-if="locations.relocated == 'yes'">
      <label for="rel_location" class="label">Release Location Description</label>
      <div class="control">
        <input  type="text"
                class="input"
                name="location"
                v-model="locations.rel_location"
                @change="updateField('locations')"
        >
      </div>
      <p class="help">
        Short description of the release location. e.g. North Muddy Mountains.
      </p>
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

<style scoped>
fieldset {
  border-width: 0;
}

select:required:invalid {
  color: gray;
}
option[value=""][disabled] {
  display: none;
}
option {
  color: black;
}
</style>
