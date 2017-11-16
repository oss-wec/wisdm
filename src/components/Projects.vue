<template lang="html">
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Groups</h1>
          <h2 class="subtitle">A list of all groups</h2>
          <router-link class="button is-info is-outlined" :to="{ name: 'NewProject' }">Add New Grouping</router-link>
        </div>
      </div>
    </section>

    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Group</th>
            <th>Date</th>
            <th>Species</th>
            <th>Hunt Units</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(group, index) in projects" key="index">
            <td>{{ group.proj_name }}</td>
            <td>{{ group.proj_start }}</td>
            <td> {{ group.species.join(', ') }} </td>
            <td> {{ group.locations.join(', ') }}</td>
          </tr>
        </tbody>
      </table>
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
