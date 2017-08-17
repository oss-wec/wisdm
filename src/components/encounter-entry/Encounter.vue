<template lang="html">
  <fieldset>

    <!-- ndow id input -->
    <div class="field">
      <label for="ndowid" class="label">NDOW ID</label>

      <div class="field has-addons">
        <div class="control is-expanded" :class="{ 'has-icons-left': errors.has('ndowid')}">
          <input type="text" class="input" 
                 placeholder="10342" 
                 name="ndowid" 
                 @change="updateField('animal')"
                 v-model="animal.ndow_id"
                 v-validate="'required'"
                 :class="{ 'is-danger': errors.has('ndowid') }"
          >
          <span class="icon is-small is-left" v-if="errors.has('ndowid')">
            <i class="fa fa-times has-text-danger"></i>
          </span>
        </div>
        <div class="control">
          <a class="button is-info">Recapture</a>
        </div>
      </div>

      <p class="help">
        What is the NDOW ID for this animal?
        <span v-show="errors.has('ndowid')" class="help is-danger">NDOW ID IS REQUIRED</span>
      </p>
    </div>

    <!-- species input -->
      <label for="species" class="label">Species</label>

      <Multiselect
                v-model="animal.species"
                :options="species"
                label="common_name"
                :searchable="true"
                :close-on-select="true"
                :show-labels="true"
                placeholder="Pick a value"
                @input="updateField('animal')"> 
      </Multiselect>

      <p class="help">
        What species is this animal?
      </p>

    <!-- project input -->
    <div class="field">
      <label for="project" class="label">Project</label>
      <div class="control">
        <input  type="text" 
                class="input" 
                v-model="encounter.project" 
                @change="updateField('encounter')">
      </div>
      <p class="help">
        With which project is this animal associated with?
      </p>
    </div>

    <!-- date input -->
    <div class="field">
      <label for="date" class="label">Date</label>
      <div class="control">
        <input  type="date" 
                class="input" 
                name="date"
                v-model="encounter.event_date"
                v-validate="'required'"
                :class="{ 'is-danger': errors.has('date') }"
                @change="updateField('encounter')"
        >
      </div>
      <p class="help">
        What date was the animal encounterd?
        <span class="help is-danger" v-show="errors.has('date')">DATE IS REQUIRED</span>
      </p>
    </div>

    <!-- status input -->
    <div class="field">
      <label for="status" class="label">Status</label>
      <div class="control">
        <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('status') }">
          <select name="status" 
                  class="is-fullwidth" 
                  @change="updateField('encounter')"
                  v-model="encounter.status"
                  v-validate="'required'"
          >
            <option value=""></option>
            <option value="alive">Alive</option>
            <option value="mortality">Mortality</option>
          </select>
        </div>
      </div>
      <p class="help">
        What is the life status of this animal?
        <span class="help is-danger" v-show="errors.has('status')">STATUS IS REQUIRED</span>
      </p>
    </div>

    <!-- sex input -->
    <div class="field">
      <label for="sex" class="label">Sex</label>
      <div class="control">
        <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('sex') }">
          <select name="sex"
                  v-model="animal.sex"
                  v-validate="'required'"
                  @change="updateField('animal')"
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
      <p class="help">
        What is the sex of this animal?
        <span class="help is-danger" v-show="errors.has('sex')">SEX IS REQUIRED</span>
      </p>
    </div>

    <!-- age input -->
    <div class="field">
      <label for="age" class="label">Age</label>
      <div class="control">
        <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('age') }">
          <select name="age" 
                  @change="updateField('encounter')"
                  v-model="encounter.age"
                  v-validate="'required'"
          >
            <option value=""></option>
            <option value="neonate">Neonate</option>
            <option value="juvenile">Juvenile</option>
            <option value="adult">Adult</option>
          </select>
        </div>
      </div>
      <p class="help">
        What is the age of the animal?
        <span class="help is-danger" v-show="errors.has('age')">AGE IS REQUIRED</span>
      </p>
    </div>

    <!-- encounter method input -->
    <div class="field">
      <label for="enc-method" class="label">Encounter Method</label>
      <div class="control">
        <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('enc-method') }">
          <select name="enc-method" 
                  @change="updateField('encounter')"
                  v-model="encounter.enc_method"
                  v-validate="'required'"
          >
            <option value=""></option>
            <option value="basecamp">Basecamp</option>
            <option value="capture crew">Capture Crew</option>
            <option value="marked observation">Marked Observation</option>
            <option value="unmarked observation">Unmarked Observation</option>
            <option value="marked mortality">Marked Mortality</option>
            <option value="unmarkec mortality">Unmarked Mortality</option>
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
      <label for="enc-reason" class="label">Encounter Reason</label>
      <div class="control">
        <div class="select is-fullwidth">
          <select name="enc-reason" 
                  @change="updateField('encounter')"
                  v-model="encounter.enc_reason"
          >
            <option value=""></option>
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

    <!-- comments input -->
    <div class="field">
      <label for="comments" class="label">Comments</label>
      <div class="control">
        <textarea name="comments" rows="5" 
                  v-model="encounter.comments" 
                  class="textarea" 
                  placeholder="write as much as your heart desires..."
                  @change="updateField('encounter')"
        ></textarea>
      </div>
      <p class="help">
        Any comments associated with this animal.
      </p>
    </div>

    <div>
      <pre><code>{{ $data }}</code></pre>
    </div>

  </fieldset>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { mapGetters } from 'vuex'
import { cloneDeep } from 'lodash'

export default {
  name: 'Encounter',

  components: { Multiselect },

  data () {
    return {
      animal: cloneDeep(this.$store.state.encounterEntry.animal),
      encounter: cloneDeep(this.$store.state.encounterEntry.encounter)
    }
  },

  computed: {
    ...mapGetters('encounterEntry', {
      species: 'speciesDropdown'
    })
  },

  methods: {
    updateField (model) {
      this.$store.commit('encounterEntry/updateModel', {
        model: model,
        data: cloneDeep(this[model])
      })
    }
  },

  mounted: function () {
    this.$store.dispatch('getSpecies')
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="css" scoped>
fieldset {
  border-width: 0;
}
</style>
