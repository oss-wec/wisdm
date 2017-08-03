<template lang="html">

  <div class="container">
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

<style lang="css">
</style>
