<template>
  <div class="field">
    <label class="label">Hunt Units</label>
    <div class="control">
      <div class="is-fullwidth">
        <Multiselect
              v-model="unit"
              :options="huntUnits"
              :multiple="true"
              :disabled="disabled"
              :closeOnSelect="false"
              group-values="units"
              group-label="area"
              placeholder="Select Hunt Units"
              @input="updateValue"
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

  props: [ 'units', 'disabled' ],

  data () {
    return {
      unit: null,
      huntUnits: [
        {
          area: 'Area 1',
          units: [ '011', '012', '013', '014', '015' ]
        }, {
          area: 'Area 2',
          units: [ '021', '022' ]
        }, {
          area: 'Area 3',
          units: [ '031', '032', '033', '034', '035' ]
        }, {
          area: 'Area 4',
          units: [ '041', '042', '043', '044', '045', '046' ]
        }, {
          area: 'Area 5',
          units: [ '051' ]
        }, {
          area: 'Area 6',
          units: [ '061', '062', '064', '065', '066', '067', '068' ]
        }, {
          area: 'Area 7',
          units: [ '071', '072', '073', '074', '075', '076', '077', '078', '079' ]
        }, {
          area: 'Area 8',
          units: [ '081' ]
        }, {
          area: 'Area 9',
          units: [ '091' ]
        }, {
          area: 'Area 10',
          units: [ '101', '102', '103', '104', '105', '106', '107', '108', '109' ]
        }, {
          area: 'Area 11',
          units: [ '111', '112', '113', '114', '115' ]
        }, {
          area: 'Area 12',
          units: [ '121' ]
        }, {
          area: 'Area 13',
          units: [ '131', '132', '133', '134' ]
        }, {
          area: 'Area 14',
          units: [ '151', '152', '153', '154', '155', '156' ]
        }, {
          area: 'Area 16',
          units: [ '161', '162', '163', '164' ]
        }, {
          area: 'Area 17',
          units: [ '171', '172', '173' ]
        }, {
          area: 'Area 18',
          units: [ '181', '182', '183', '184' ]
        }, {
          area: 'Area 19',
          units: [ '192', '194', '195', '196' ]
        }, {
          area: 'Area 20',
          units: [ '201', '202', '203', '204', '205', '206', '207' ]
        }, {
          area: 'Area 21',
          units: [ '211', '212', '213' ]
        }, {
          area: 'Area 22',
          units: [ '221', '222', '223' ]
        }, {
          area: 'Area 23',
          units: [ '231' ]
        }, {
          area: 'Area 24',
          units: [ '241', '242', '243', '244', '245' ]
        }, {
          area: 'Area 25',
          units: [ '251', '252', '253', '254' ]
        }, {
          area: 'Area 26',
          units: [ '261', '262', '263', '264', '265', '266', '267', '268', '269' ]
        }, {
          area: 'Area 27',
          units: [ '271', '272' ]
        }, {
          area: 'Area 28',
          units: [ '280', '281', '282', '283', '284', '286' ]
        }, {
          area: 'Area 29',
          units: [ '291' ]
        }, {
          area: 'Out Of State',
          units: [ 'CA', 'ID', 'UT' ]
        }, {
          area: 'Other',
          units: [ 'Deat Valley NP', 'Great Basin NP', 'Nevada Test Site', 'Sheldon NWR' ]
        }
      ]
    }
  },

  methods: {
    updateValue () {
      this.$emit('input', this.unit)
    }
  }
}
</script>

<style>
  
</style>
