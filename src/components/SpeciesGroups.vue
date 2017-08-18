<template lang="html">

  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Species Groups
          </h1>
          <p>
            Each species that occurs in nevada has been grouped into the following groups. These groups closely follow higher taxonomies. Some are Families while others may be Orders or Superorders.
          </p>
        </div>
      </div>
    </section>

    <div class="columns is-multiline">
      <GroupCard v-for="(group, index) in groups" :key="index" :group="group"></GroupCard>
    </div>
  </div>

</template>

<script>
import GroupCard from './GroupCard'
import { mapGetters } from 'vuex'

export default {
  name: 'SpeciesGroups',

  components: {
    GroupCard
  },

  computed: {
    ...mapGetters({
      groups: 'speciesGroups'
    })
  },

  mounted: function () {
    this.$store.dispatch('getSpecies')
  }
}
</script>

<style lang="css" scoped>
  .container {
    padding: 10px 0 25px 0;
  }
</style>
