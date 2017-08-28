<template>
  <div class="field">
    <label class="label">Hunt Units</label>
    <div class="control">
      <div class="is-fullwidth">
        <Multiselect
              v-model="unit"
              :options="huntUnits"
              :multiple="true"
              group-values="units"
              group-label="area"
              placeholder="Select Hunt Units"
               />
      </div>
    </div>
    <p class="help">Select hunt units</p>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'HuntUnits',

  components: { Multiselect },

  data () {
    return {
      unit: null,
      huntUnits: [
        {
          area: 'Area 1',
          units: [
            '011', '012', '013', '014', '015'
          ]
        }, {
          area: 'Area 2',
          units: [
            '021', '022'
          ]
        }, {
          area: 'Area 3',
          units: [
            '031', '032', '033', '034', '035'
          ]
        }, {
          area: 'Area 4',
          units: [
            '041', '042', '043', '044', '045', '046'
          ]
        }
      ]
    }
  }
}
</script>

<style>
  
</style>
