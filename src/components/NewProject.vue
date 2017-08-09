<template lang="html">
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <form>
        <legend class="title">Enter New Project Information</legend>
        <div class="notification is-info">
          <p>
            A project is a way to logically group animals into collections. Each project should have several animals and correspond to an actual on the ground capture event. Occasionally a project can be a longer term effort. For instance, collecting hunter harvest samples.
          </p>
          <p>
            In this form all fields are required.
          </p>
        </div>
        <hr>

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
          <label class="label">End Date</label>
          <div class="control">
            <input type="date" class="input" name="end"
                   v-model="model.end_date"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('end')}">
          </div>
          <p class="help">What is the project end date</p>
          <p class="help is-danger" v-show="errors.has('end')">End Date is required</p>
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

        <div class="field">
          <label class="label">Location</label>
          <div class="control">
            <input type="text" class="input" name="location" placeholder="Muddy Mountains, Beehive Campground"
                   v-model="model.location"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('location')}">
          </div>
          <p class="help">Where, specifically, is the project located</p>
          <p class="help is-danger" v-show="errors.has('location')">Start date is required</p>
        </div>

        <div class="notification is-danger" v-if="!!error">
          <ol>
            <li v-for="err in error.response.data.error">
              {{ err.message }}
            </li>
          </ol>
        </div>

        <div class="field">
          <p class="control">
            <a class="button is-info is-medium is-outlined"
               :class="{ 'is-loading': submitting }"
               @click="submit">Submit Project</a>
          </p>
        </div>
      </form>

      <div class="section">
        <pre><code>{{ structure }}</code></pre>
      </div>

    </div>
  </div>
</template>

<script>
import { createProject } from '../api'
import router from '../router'

export default {
  data () {
    return {
      model: {
        proj_name: null,
        start_date: null,
        end_date: null,
        desc: null,
        location: null
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
        router.push({ name: 'Home' })
      })
      .catch(error => {
        this.error = error
        this.toggleSubmit()
      })
    }
  },

  computed: {
    structure () {
      return {
        proj_name: this.model.proj_name,
        proj_desc: this.model.desc,
        proj_loc: this.model.location,
        proj_start: this.model.start_date,
        proj_end: this.model.end_date
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
