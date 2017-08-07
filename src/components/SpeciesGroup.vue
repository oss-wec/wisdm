<template lang="html">
  <div class="container">
    <div class="pad-md">
      <p class="has-text-centered">A complete list of {{ group.name }} species that occur in Nevada.</p>
    </div>

    <div>
      <ul v-for="(family, index) in families">
        <li class="family-head"><p class="is-size-3">{{ family.name }}</p></li>
        <ul v-for="(species, index) in family.species">
          <li class="sp-list">{{ species.common_name }} - <span><small class="has-text-grey">{{ species.species_name }}</small></span></li>
        </ul>
      </ul>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SpeciesGroup',

  computed: {
    ...mapState({
      group: state => state.speciesByGroup
    }),

    families () {
      let families = [...new Set(this.group.species.map(s => {
        return s.t_family
      }))].sort()
      let arr = []

      families.forEach(g => {
        let species = this.group.species.filter(v => v.t_family === g)
        arr.push({
          name: g,
          species: species
        })
      })

      return arr
    }
  }
}
</script>

<style lang="css">
.family-head {
  color: #327d88;
  border-bottom: 1px solid#327d88;
  padding: 15px 0 5px 0;
}

.sp-list {
  border-bottom: 1px solid lightgrey;
  padding: 5px 0 5px 5px;
}

.sp-list:hover {
  background-color: rgba(114,151,144,.1);
}

.pad-md {
  padding: 10px;
}
</style>
