<template lang="html">
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <form>

        <legend class="title">Enter New Project Information</legend>
        <div class="message is-info is-small">
          <div class="message-body">
            A project is a way to logically group animals into collections. Each project should have several animals and correspond to an actual on the ground capture event. Occasionally a project can be a longer term effort. For instance, collecting hunter harvest samples.
          </div>
        </div>

        <div class="message is-warning is-small">
          <div class="message-body">
            All fields in this form are required.
          </div>
        </div>

        <div class="field">
          <label class="label">Project Type</label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('type') }">
              <select name="type"
                      v-model="model.proj_type"
                      v-validate="'required'"
              >
                <option value="project">Project</option>
                <option value="stage">Stage</option>
              </select>
            </div>
          </div>
          <p class="help">Is this a project or a project stage</p>
          <p class="help is-danger" v-show="errors.has('type')">PROJECT TYPE IS REQUIRED</p>
        </div>

        <div class="field">
          <label class="label">Project Name</label>
          <div class="control">
            <input type="text" class="input" placeholder="Muddy Mtns 2017 DBHS" name="name"
                    v-validate="'required'"
                    :class="{ 'is-danger': errors.has('name') }"
                    v-model="model.proj_name"
                    >
          </div>
          <p class="help">Name the project</p>
          <p v-show="errors.has('name')" class="help is-danger">Project Name is required</p>
        </div>
      
        <SelectProject 
          v-if="!isDisabled"
          :selected="model.parent" 
          :multiple="false" 
          :close="true" 
          fieldLabel="Parent Project"
          helpText="What is the parent project for this stage?"
          @input="value => { model.parent = value }"
        />

        <SelectSpecies :species="model.species" :multiple="true" fieldLabel="Species" @input="value => { model.species = value }" :close="false" v-if="isDisabled" />

        <SelectPeople :person="model.leads" :disabled="!isDisabled" fieldLabel="Leads" helpText="Select the project leaders for this project"
              @input="value => { model.leads = value }" v-if="isDisabled" />

        <SelectPeople :person="model.collabs" :disabled="isDisabled" fieldLabel="Collaborators" helpText="Select collaborators for this project"
              @input="value => { model.collabs = value }" v-if="!isDisabled" />

        <HuntUnits :units="model.locations" :disabled="isDisabled" @input="value => { model.locations = value }" v-if="!isDisabled" />

        <div class="field">
          <label class="label">Start Date</label>
          <div class="control">
            <input type="date" class="input" name="start"
                    v-model="model.start_date"
                    v-validate="'required'"
                    :class="{ 'is-danger': errors.has('start')}">
          </div>
          <p class="help">What is the project start date</p>
          <p class="help is-danger" v-show="errors.has('start')">Start Date is required</p>
        </div>

        <div class="field">
          <label class="label">Project Duration</label>
          <div class="field has-addons">
            <p class="control is-expanded">
              <input class="input" type="text" v-model="model.duration">
            </p>
            <p class="control">
              <span class="select">
                <select v-model="model.time_frame">
                  <option value="days">Days</option>
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
                  <option value="years" selected>Years</option>
                </select>
              </span>
            </p>
          </div>
          <p class="help">How long will the project last and what is the interval</p>
        </div>

        <div class="field">
          <label for="desc" class="label">Description</label>
          <div class="control">
            <textarea rows="5" class="textarea" name="desc"
                      placeholder="2016 Muddy Mtn bighorn sheep capture. The sheep were moved to Utah... etc."
                      v-model="model.desc"
                      v-validate="'required'"
                      :class="{ 'is-danger': errors.has('desc')}"
            ></textarea>
          </div>
        </div>

        <div class="notification is-danger" v-if="!!error">
          <ol>
            <li v-for="err in error.response.data.error">
              {{ err.message }}
            </li>
          </ol>
        </div>

        <div class="has-text-centered">
          <button class="button is-info is-medium is-outlined is-fullwidth"
                  :class="{ 'is-loading': submitting }"
                  @click.prevent="submit">Submit Project</button>
        </div>
        <pre><code>{{ $data }}</code></pre>
        <pre><code>{{ structure }}</code></pre>
      </form>

    </div>
  </div>
</template>

<script>
// import { vSelect } from 'vue-select'
import Multiselect from 'vue-multiselect'
import SelectPeople from './micro/SelectPeople'
import HuntUnits from './micro/HuntUnits'
import SelectProject from './micro/SelectProject'
import SelectSpecies from './micro/SelectSpecies'
import { createProject } from '../api'
import router from '../router'

export default {
  components: { Multiselect, HuntUnits, SelectPeople, SelectSpecies, SelectProject },

  data () {
    return {
      model: {
        proj_name: null,
        proj_type: 'project',
        parent: '',
        start_date: null,
        end_date: null,
        duration: null,
        time_frame: 'years',
        desc: null,
        locations: null,
        leads: null,
        collabs: null,
        species: null
      },
      submitting: false,
      error: null
    }
  },

  methods: {
    toggleSubmit () {
      this.submitting = !this.submitting
    },

    submit () {
      this.toggleSubmit()
      createProject(this.structure)
      .then(response => console.log(response))
      .then(() => {
        this.toggleSubmit()
        this.error = null
        router.push({ name: 'Projects' })
      })
      .catch(error => {
        this.error = error
        this.toggleSubmit()
      })
    }
  },

  computed: {
    isDisabled () {
      return this.model.proj_type !== 'stage'
    },

    structure () {
      const structure = {
        proj_type: this.model.proj_type,
        proj_name: this.model.proj_name,
        proj_desc: this.model.desc,
        proj_start: this.model.start_date,
        proj_duration: this.model.duration,
        time_frame: this.model.time_frame
      }
      if (this.model.parent) structure.parent_id = this.model.parent.id

      const leads = this.model.leads
      ? this.model.leads.map(i => {
        return {
          user_id: i.id,
          type: 'lead'
        }
      })
      : null
      const collabs = this.model.collabs
      ? this.model.collabs.map(i => {
        return {
          user_id: i.id,
          type: 'collaborator'
        }
      })
      : null
      const locations = this.model.locations
        ? this.model.locations.map(i => {
          return {
            hunt_unit: i
          }
        })
        : null

      if (collabs) structure.projectUsers = collabs
      if (leads) structure.projectUsers = leads
      if (locations) structure.projectLocations = locations
      if (this.model.species) structure.projectSpecies = this.model.species

      return structure
    }
  },

  mounted: function () {
    this.$store.dispatch('getAllUsers')
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="css" scoped>
  .columns {
    margin: 10px 0;
  }

  .button {
    margin-top: 10px;
  }
</style>
