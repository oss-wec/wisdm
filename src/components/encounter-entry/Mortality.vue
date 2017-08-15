<template lang="html">
  <fieldset>

        <!-- investigator -->
        <div class="field">
          <label class="label">Investigator
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="text" class="input" name="investigator"
                   v-model="investigator"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('investigator')  }"
            >
          </div>
          <p class="help">
            Who investigated the mortality
            <span class="help is-danger" v-show="errors.has('investigator')">
              INVESTIGATOR IS REQUIRED
            </span>
          </p>
        </div>
        <!-- carcass age -->
        <div class="field">
          <label class="label">Carcass Age
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('carcass-age') }">
              <select name="carcass-age" required
                      v-model="carcass_age"
                      v-validate="'required'"
              >
                <option value="">Select Option...</option>
                <option value="lt 1 week">lt 1 week</option>
                <option value="lt 1 month">lt 1 month</option>
                <option value="gt 1 month">gt 1 month</option>
              </select>
            </div>
          </div>
          <p class="help">
            What is the estimated age of the carcass?
            <span class="help is-danger" v-show="errors.has('carcass_age')">
              CARCASS AGE IS REQUIRED
            </span>
          </p>
        </div>
        <!-- cause of death  -->
        <div class="field">
          <label class="label">Cause of Death
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('cause-death') }">
              <select name="cause-death" required
                      v-model="cause"
                      v-validate="'required'"
              >
                <option value="">Select Option...</option>
                <option value="capture related">Capture Related</option>
                <option value="disease">Disease</option>
                <option value="euthanasia">Euthanasia</option>
                <option value="harvest">Harvest</option>
                <option value="malnutrition">Malnutrition</option>
                <option value="predation - bear">Predation - Bear</option>
                <option value="predation - bobcat">Predation - Bobcat</option>
                <option value="predation - coyote">Predation - Coyote</option>
                <option value="predation - lion">Predation - Lion</option>
                <option value="roadkill">Roadkill</option>
                <option value="toxicity">Toxicity</option>
                <option value="trauma">Trauma</option>
              </select>
            </div>
          </div>
          <p class="help">
            What is the cause of death?
            <span class="help is-danger" v-show="errors.has('cause-death')">
              CAUSE OF DEATH IS REQUIRED
            </span>
          </p>
        </div>
        <!-- certainty of cause -->
        <div class="field">
          <label class="label">Certainty of Cause
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('cause-certainty') }">
              <select name="cause-certainty" required
                      v-model="certainty"
                      v-validate="'required'"
              >
                <option value="">Select Option...</option>
                <option value="0">0% - Unknown</option>
                <option value="20">20% - Unknown</option>
                <option value="40">40% - Possible</option>
                <option value="60">60% - Possible</option>
                <option value="80">80% - Probable</option>
                <option value="100">100% - Certnain</option>
              </select>
            </div>
          </div>
          <p class="help">
            How certain are you about the cause of death?
            <span class="help is-danger" v-show="errors.has('cause-certainty')">
              CERTANTY OF CAUSE OF DEATH IS REQUIRED
            </span>
          </p>
        </div>
        <!-- description of mortality -->
        <div class="field">
          <label class="label">Description of Mortality</label>
          <div class="control">
            <textarea id="" rows="5" class="textarea" v-model="mort_description"></textarea>
          </div>
          <p class="help">
            A detailed description of the mortality or animal history. This includes evidence to support cause of death.
          </p>
        </div>
        <!-- estimated date of mortality -->
        <div class="field">
          <label class="label">Estimated date of Mortality</label>
          <div class="control">
            <input type="date" class="input" v-model="mort_date">
          </div>
          <p class="help">
            What is the estimated date that this animal died?
          </p>
        </div>
        <!-- femur index -->
        <div class="field">
          <label class="label">Femur Index</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select name="cause-certainty" required
                      v-model="femur_index"
              >
                <option value="">Select Option...</option>
                <option value="1">1 - White, hard, and waxy</option>
                <option value="2">2 - Pink to red, and firm</option>
                <option value="3">3 - Pink to red, and soft</option>
                <option value="4">4 - Deep red, and gelatinous</option>
              </select>
            </div>
          </div>
          <p class="help">
            What is the femur index?
          </p>
        </div>
        <!-- gross diagnosis -->
        <div class="field">
          <label class="label">Gross Diagnosis</label>
          <div class="control">
            <textarea id="" rows="3" class="textarea" v-model="gross_diagnosis"></textarea>
          </div>
          <p class="help">
            Gross necropsy diagnoses for death.
          </p>
        </div>
        <!-- histological diagnosis -->
        <div class="field">
          <label class="label">Description of Mortality</label>
          <div class="control">
            <textarea id="" rows="3" class="textarea" v-model="histological_diagnosis"></textarea>
          </div>
          <p class="help">
            Histologcal diagnoses for death from lab.
          </p>
        </div>

    <pre><code>{{ $data }}</code></pre>

  </fieldset>
</template>

<script>
export default {
  name: 'Mortality',

  data () {
    return {
      investigator: null,
      carcass_age: '',
      cause: '',
      certainty: '',
      mort_description: null,
      mort_date: null,
      femur_index: '',
      gross_diagnosis: null,
      histological_diagnosis: null
    }
  }
}
</script>

<style lang="css" scoped>
select:required:invalid {
  color: gray;
}
option[value=""][disabled] {
  display: none;
}
option {
  color: black;
}

fieldset {
  border-width: 0;
}
</style>
