<template lang="html">
  <fieldset>

    <div class="message is-info" v-for="(sample, index) in samples">
      <div class="message-header">
        Sample {{ index + 1}}
        <a class="delete" @click="deleteDynElement(index)"></a>
      </div>

      <div class="message-body">
        <!-- sample field -->
        <div class="field">
          <label class="label">Sample
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('sample' + index) }">
              <select :name="'sample' + index" required
                      v-model="sample.sample"
                      v-validate="'required'"
              >
                <option value="">Select Option...</option>
                <option value="heart">Heart</option>
                <option value="eyes">Eyes</option>
                <option value="Kidney"></option>
              </select>
            </div>
          </div>
          <p class="help">
            What sample was collected from this animal?
            <span class="help is-danger" v-show="errors.has('sample' + index)">SAMPLE IS REQUIRED</span>
          </p>
        </div>

        <!-- destination field -->
        <div class="field">
          <label class="label">Destination</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select :name="'destination' + index" required
                      v-model="sample.destination"
              >
                <option value="">Select Option...</option>
                <option value="waddl">WADDL</option>
                <option value="isu">ISU</option>
                <option value="archive">Archive</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <p class="help">
            Where will this sample be sent?
          </p>
        </div>

        <!-- notes field -->
        <div class="field">
          <label class="label">Sample Notes</label>
          <div class="control">
            <textarea rows="3" class="textarea" v-model="sample.notes"></textarea>
          </div>
          <p class="help">
            Any notes associated with the collection of this sample.
          </p>
        </div>
      </div>
    </div>


    <a class="button is-info is-medium" @click="addDynElement">Add Sample</a>
    <pre><code>{{ $data }}</code></pre>

  </fieldset>
</template>

<script>
import { emptyModel } from '../util'

export default {
  name: 'Samples',

  data () {
    return {
      samples: [
        {
          sample: '',
          destination: null,
          notes: null
        }
      ]
    }
  },

  methods: {
    addDynElement () {
      this.samples.push(emptyModel(this.samples[0]))
    },

    deleteDynElement (index) {
      this.samples.splice(index, 1)
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
