<template lang="html">
  <fieldset>

    <div class="field">
      <label class="label">Lab IDs</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="labids" @change="updateField"></textarea>
      </div>
      <p class="help">
        Any samples that are sent to a lab should have a Lab ID, enter them here. Separate IDs with a comma
      </p>
    </div>

    <pre><code>{{ $data }}</code></pre>
    <pre><code>{{ parsedIds }}</code></pre>

  </fieldset>
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  name: 'LabIds',

  data () {
    return {
      labids: cloneDeep(this.$store.state.encounterEntry.labids)
      // labids: null
    }
  },

  methods: {
    updateField () {
      this.$store.commit('encounterEntry/updateModel', {
        model: 'labids',
        data: cloneDeep(this.parsedIds)
      })
    }
  },

  computed: {
    parsedIds () {
      if (this.labids) {
        return this.labids
          .split(', ')
          .map(m => ({ lab_id: m }))
      }
      return null
    }
  }
}
</script>

<style lang="css" scoped>
fieldset {
  border-width: 0;
}
</style>
