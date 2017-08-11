<template lang="html">
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Projects</h1>
          <h2 class="subtitle">A list of all projects</h2>
          <button class="button is-info is-outlined">Add New Project</button>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="box" v-for="(project, index) in projects">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p class="title is-size-4">{{ project.proj_name }}</p>
              <p class="subtitle is-size-6">{{ project.proj_loc }}</p>

              <p>{{ project.proj_desc }}</p>

              <p class="subtitle is-size-6">{{ localDate(project.proj_start) }} - {{ localDate(project.proj_start) }}</p>
            </div>
          </div>
        </article>
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
