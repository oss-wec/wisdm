<template lang="html">
  <div class="container">

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Animal Log
          </h1>
          <h2 class="subtitle">
            Every animal in the database will appear here. 
          </h2>
          <router-link class="button is-info is-outlined" :to="{ name: 'NewAnimal' }">Enter New Animal</router-link>
        </div>
      </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-4" v-for="(animal, index) in animals">
        <AnimalCard :animal="animal" :key="index"></AnimalCard>
      </div>
    </div>

  </div>
</template>

<script>
import AnimalCard from './AnimalCard'
import { mapState } from 'vuex'

export default {
  name: 'AnimalLog',

  components: {
    AnimalCard
  },

  data () {
    return {
      activeModal: false
    }
  },

  methods: {
    activateModal () {
      this.activeModal = !this.activeModal
    }
  },

  computed: {
    ...mapState({
      animals: 'animals'
    })
  },

  mounted: function () {
    this.$store.dispatch('getAnimals')
  }
}
</script>

<style lang="css" scoped>

</style>
