<template lang="html">
  <fieldset>

    <!-- necropsy_date -->
    <div class="field">
      <label class="label">Necropsy Date</label>
      <div class="control">
        <input type="date" class="input" v-model="necropsy.necropsy_date" name="necropsy_date" @change="updateField">
      </div>
      <p class="help">
        What date was the animal necropsied?
      </p>
    </div>
    <!-- condition -->
    <div class="field">
      <label class="label">General Condition</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.condition" @change="updateField"></textarea>
      </div>
    </div>
    <!-- integument -->
    <div class="field">
      <label class="label">Integument</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.integument" @change="updateField"></textarea>
      </div>
    </div>
    <!-- musculoskeletal -->
    <div class="field">
      <label class="label">Musculoskeletal</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.musculoskeletal" @change="updateField"></textarea>
      </div>
    </div>
    <!-- body_cavities -->
    <div class="field">
      <label class="label">Body Cavities</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.body_cavities" @change="updateField"></textarea>
      </div>
    </div>
    <!-- hemolymphatic -->
    <div class="field">
      <label class="label">Hemolymphatic</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.hemolymphatic" @change="updateField"></textarea>
      </div>
    </div>
    <!-- respiratory -->
    <div class="field">
      <label class="label">Respiratory</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.respiratory" @change="updateField"></textarea>
      </div>
    </div>
    <!-- cardiovascular -->
    <div class="field">
      <label class="label">Cardiovascular</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.cardiovascular" @change="updateField"></textarea>
      </div>
    </div>
    <!-- digestive -->
    <div class="field">
      <label class="label">Digestive</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.digestive" @change="updateField"></textarea>
      </div>
    </div>
    <!-- urinary -->
    <div class="field">
      <label class="label">Urinary</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.urinary" @change="updateField"></textarea>
      </div>
    </div>
    <!-- reproductive -->
    <div class="field">
      <label class="label">Reproductive</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.reproductive" @change="updateField"></textarea>
      </div>
    </div>
    <!-- endocrine -->
    <div class="field">
      <label class="label">Endocrine</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.endocrine" @change="updateField"></textarea>
      </div>
    </div>
    <!-- nervous -->
    <div class="field">
      <label class="label">Nervous</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.nervous" @change="updateField"></textarea>
      </div>
    </div>
    <!-- sensory -->
    <div class="field">
      <label class="label">Sensory</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.sensory" @change="updateField"></textarea>
      </div>
    </div>
    <!-- lab_studies -->
    <div class="field">
      <label class="label">Lab Studies</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="necropsy.lab_studies" @change="updateField"></textarea>
      </div>
    </div>

    <pre><code>{{ $data }}</code></pre>

  </fieldset>
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  name: 'Necropsy',

  data () {
    return {
      necropsy: cloneDeep(this.$store.state.encounterEntry.necropsy)
    }
  },

  methods: {
    updateField () {
      this.$store.commit('encounterEntry/updateModel', {
        model: 'necropsy',
        data: cloneDeep(this.necropsy)
      })
    }
  }
}
</script>

<style lang="css" scoped>
fieldset {
  border-width: 0;
}
</style>
