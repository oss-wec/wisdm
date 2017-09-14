<template lang="html">
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Projects</h1>
          <h2 class="subtitle">A list of all projects</h2>
          <router-link class="button is-info is-outlined" :to="{ name: 'NewProject' }">Add New Project</router-link>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="columns is-multiline">

        <div class="column is-one-third" v-for="(project, index) in projects">
          <div class="card">
            <div class="card-content">
              
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{ project.proj_name }}</p>
                  <p class="subtitle is-6">
                    {{ localDate(project.proj_start) }} - {{ project.proj_duration }} {{ project.time_frame }}
                  </p>
                </div>
              </div>

              <div class="content">
                {{ project.proj_desc }}
              </div>

              <div class="content">

              </div>
            </div>

            <footer class="card-footer">
              <!-- TODO: project length needs to be a method that returns zero is stages is null -->
              <!-- <a href="#" class="card-footer-item">{{ project.stages.length }} Stages</a> --> 
              <a href="#" class="card-footer-item">View</a>
            </footer>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getProjects } from '../api'
export default {
  name: 'Projects',

  data () {
    return {
      projects: null
    }
  },

  methods: {
    setProjects () {
      getProjects()
      .then(response => { this.projects = response.data.data })
    },

    localDate (isoStr) {
      let ds = new Date(isoStr)
      return ds.toLocaleDateString()
    }
  },

  mounted: function () {
    this.setProjects()
  }
}
</script>

<style lang="css" scoped>
.title {
  color: #175d49;
}

.subtitle {
  color: #868787;
}
</style>
