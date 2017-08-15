<template lang="html">
  <fieldset>

    <!-- necropsy_date -->
    <div class="field">
      <label class="label">Necropsy Date</label>
      <div class="control">
        <input type="date" class="input" v-model="necropsy_date" name="necropsy_date">
      </div>
      <p class="help">
        What date was the animal necropsied?
      </p>
    </div>
    <!-- condition -->
    <div class="field">
      <label class="label">General Condition</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="condition"></textarea>
      </div>
    </div>
    <!-- integument -->
    <div class="field">
      <label class="label">Integument</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="integument"></textarea>
      </div>
    </div>
    <!-- musculoskeletal -->
    <div class="field">
      <label class="label">Musculoskeletal</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="musculoskeletal"></textarea>
      </div>
    </div>
    <!-- body_cavities -->
    <div class="field">
      <label class="label">Body Cavities</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="body_cavities"></textarea>
      </div>
    </div>
    <!-- hemolymphatic -->
    <div class="field">
      <label class="label">Hemolymphatic</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="hemolymphatic"></textarea>
      </div>
    </div>
    <!-- respiratory -->
    <div class="field">
      <label class="label">Respiratory</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="respiratory"></textarea>
      </div>
    </div>
    <!-- cardiovascular -->
    <div class="field">
      <label class="label">Cardiovascular</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="cardiovascular"></textarea>
      </div>
    </div>
    <!-- digestive -->
    <div class="field">
      <label class="label">Digestive</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="digestive"></textarea>
      </div>
    </div>
    <!-- urinary -->
    <div class="field">
      <label class="label">Urinary</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="urinary"></textarea>
      </div>
    </div>
    <!-- reproductive -->
    <div class="field">
      <label class="label">Reproductive</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="reproductive"></textarea>
      </div>
    </div>
    <!-- endocrine -->
    <div class="field">
      <label class="label">Endocrine</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="endocrine"></textarea>
      </div>
    </div>
    <!-- nervous -->
    <div class="field">
      <label class="label">Nervous</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="nervous"></textarea>
      </div>
    </div>
    <!-- sensory -->
    <div class="field">
      <label class="label">Sensory</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="sensory"></textarea>
      </div>
    </div>
    <!-- lab_studies -->
    <div class="field">
      <label class="label">Lab Studies</label>
      <div class="control">
        <textarea rows="3" class="textarea" v-model="lab_studies"></textarea>
      </div>
    </div>

    <pre><code>{{ $data }}</code></pre>

  </fieldset>
</template>

<script>
export default {
  name: 'Necropsy',

  data () {
    return {
      necropsy_date: null,
      condition: null,
      integument: null,
      musculoskeletal: null,
      body_cavities: null,
      hemolymphatic: null,
      respiratory: null,
      cardiovascular: null,
      digestive: null,
      urinary: null,
      reproductive: null,
      endocrine: null,
      nervous: null,
      sensory: null,
      lab_studies: null
    }
  }}
</script>

<style lang="css" scoped>
fieldset {
  border-width: 0;
}
</style>
