<template lang="html">
  <fieldset>

    <!-- ndow id input -->
    <div class="field">
      <label for="ndowid" class="label">NDOW ID
        <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
      </label>

      <div class="field has-addons">
        <div class="control is-expanded" :class="{ 'has-icons-left': errors.has('ndowid')}">
          <input type="text" class="input" 
                 placeholder="10342" 
                 name="ndowid" 
                 @change="updateField('animal')"
                 v-model="animal.animal_id"
                 v-validate="'required'"
                 :class="{ 'is-danger': errors.has('ndowid') }"
          >
          <span class="icon is-small is-left" v-if="errors.has('ndowid')">
            <i class="fa fa-times has-text-danger"></i>
          </span>
        </div>
        <div class="control">
          <a class="button is-info" @click="findRecap">Recapture</a>
        </div>
      </div>

      <p class="help">
        What is the NDOW ID for this animal?
        <span v-show="errors.has('ndowid')" class="help is-danger">NDOW ID IS REQUIRED</span>
      </p>
    </div>

    <!-- species input -->
    <div class="field">
      <SelectSpecies 
        :species="animal.species_id" 
        :multiple="false" 
        fieldLabel="Species" 
        @input="value => { animal.species_id = value; updateField('animal') }" 
        :close="true"
      />
      <!-- <label for="species" class="label">Species</label>
      <Multiselect
                v-model="animal.species_id"
                :options="species"
                label="common_name"
                :searchable="true"
                :close-on-select="true"
                :show-labels="false"
                placeholder="Type species common name"
                @input="updateField('animal')"> 
      </Multiselect>
      <p class="help">
        What species is this animal?
      </p> -->
    </div>

    <!-- project input -->
    <div class="field">
      <SelectProject
        :selected="encounter.project_id"
        :multiple="false"
        :close="true"
        fieldLabel="Select Project"
        helpText="What project does this animal belong to?"
        @input="value => { encounter.project_id = value; updateField('encounter') }"
      />
    </div>

    <!-- date input -->
    <div class="field">
      <label for="date" class="label">Date
        <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
      </label>
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

    <!-- reencounter input -->
    <div class="field">
      <label for="reencounter" class="label">Reencounter
        <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
      </label>
      <div class="control">
        <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('reencounter') }">
          <select name="reencounter" 
                  class="is-fullwidth" 
                  @change="updateField('encounter')"
                  v-model="encounter.reencounter"
                  v-validate="'required'"
                  required
          >
            <option value="" disabled>Select Option...</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>
      <p class="help">
        Is this animal a reencounter?
        <span class="help is-danger" v-show="errors.has('reencounter')">STATUS IS REQUIRED</span>
      </p>
    </div>

    <!-- status input -->
    <div class="field">
      <label for="status" class="label">Status
        <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
      </label>
      <div class="control">
        <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('status') }">
          <select name="status" 
                  class="is-fullwidth" 
                  @change="updateField('encounter')"
                  v-model="encounter.status"
                  v-validate="'required'"
                  required
          >
            <option value="" disabled>Select Option...</option>
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
      <label for="sex" class="label">Sex
        <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
      </label>
      <div class="control">
        <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('sex') }">
          <select name="sex"
                  v-model="animal.sex"
                  v-validate="'required'"
                  @change="updateField('animal')"
                  required
          >
            <option value="" disabled>Select Option...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unk">Unknown</option>
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
      <label for="age" class="label">Age
        <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
      </label>
      <div class="control">
        <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('age') }">
          <select name="age" 
                  @change="updateField('encounter')"
                  v-model="encounter.age"
                  v-validate="'required'"
                  required
          >
            <option value="" disabled>Select Option...</option>
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

  </fieldset>
</template>

<script>
import Multiselect from 'vue-multiselect'
import SelectProject from '../micro/SelectProject'
import SelectSpecies from '../micro/SelectSpecies'
import { mapGetters, mapState, mapActions } from 'vuex'
import { cloneDeep } from 'lodash'
import { findById } from '../../api'

export default {
  name: 'Encounter',

  components: { Multiselect, SelectProject, SelectSpecies },

  data () {
    return {
      animal: cloneDeep(this.$store.state.encounterEntry.animal),
      encounter: cloneDeep(this.$store.state.encounterEntry.encounter)
    }
  },

  computed: {
    ...mapGetters('encounterEntry', {
      species: 'speciesDropdown'
    }),

    ...mapState({
      projOptions: 'projectList'
    })
  },

  methods: {
    ...mapActions('encounterEntry', [ 'getRecap' ]),

    updateField (model) {
      this.$store.commit('encounterEntry/updateModel', {
        model: model,
        data: cloneDeep(this[model])
      })
    },

    findRecap () {
      findById(this.animal.animal_id)
        .then(recap => {
          const data = recap.data.data
          console.log(data)

          if (!data) {
            this.$toast.warn({
              title: 'No Encounter',
              message: `${this.animal.animal_id} is not a re-encounter`,
              progressBar: true,
              position: 'top right',
              timeOut: 5000
            })
          } else {
            const marks = data.Marks
              ? data.Marks.map(m => ({
                mark_type: m.mark_type,
                mark_id: m.mark_id,
                mark_color: m.mark_color,
                mark_location: m.mark_location,
                date_given: m.date_given,
                date_removed: m.date_removed
              }))
              : null
            const devices = data.Devices
              ? data.Devices.map(m => ({
                type: m.type,
                serial_num: m.serial_num,
                frequency: m.frequency,
                inservice: m.inservice,
                outservice: m.outservice
              }))
              : null

            // set reencounter to true
            this.encounter.reencounter = true

            if (marks) {  // if marks == true then update devices in state = to local marks
              this.$store.commit('encounterEntry/updateModel', {
                model: 'marks',
                data: marks
              })

              // if marks module isnt visible, toggle it
              if (!this.$store.state.encounterEntry.moduleSelection.marks) {
                this.$store.commit('encounterEntry/toggleModuleSelection', 'marks')
              }
            }

            if (devices) {  // if devices == true then update devices in state = to local devices
              this.$store.commit('encounterEntry/updateModel', {
                model: 'devices',
                data: devices
              })

              // if devices module isnt visible, toggle it
              if (!this.$store.state.encounterEntry.moduleSelection.devices) {
                this.$store.commit('encounterEntry/toggleModuleSelection', 'devices')
              }
            }

            this.$toast.info({
              title: 'Found Encounter',
              message: `${this.animal.animal_id} is a re-encounter`,
              progressBar: true,
              position: 'top right',
              timeOut: 5000
            })

            // this.getRecap({ data, devices, marks })
          }
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
