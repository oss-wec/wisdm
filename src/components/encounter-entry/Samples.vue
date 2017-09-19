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
                      @change="updateField"
              >
                <option value="" disabled>Select Option...</option>
                <option value="bladder">Bladder</option>
                <option value="blood - blue top">Blood - Blue Top</option>
                <option value="blood - purple top">Blood - Purple Top</option>
                <option value="blood - tiger top">Blood - Tiger Top</option>
                <option value="bones">Bones</option>
                <option value="brain">Brain</option>
                <option value="bullae">Bullae</option>
                <option value="bullae swab">Bullae Swab</option>
                <option value="carcass">Carcass</option>
                <option value="ear">Ear</option>
                <option value="eye">Eye</option>
                <option value="fecal">Fecal</option>
                <option value="hair">Hair</option>
                <option value="head">Head</option>
                <option value="heart">Heart</option>
                <option value="intestine">Intestine</option>
                <option value="kidney">Kidney</option>
                <option value="limbs">Limbs</option>
                <option value="liver">Liver</option>
                <option value="lymph nodes">Lymph Nodes</option>
                <option value="muscle">Muscle</option>
                <option value="nasal swab">Nasal Swab</option>
                <option value="obex">Obex</option>
                <option value="parasite">Parasite</option>
                <option value="pharyngeal swab">Pharyngeal Swab</option>
                <option value="sinus">Sinus</option>
                <option value="sinus swab">Sinus Swab</option>
                <option value="spleen">Spleen</option>
                <option value="teeth">Teeth</option>
                <option value="tonsil">Tonsil</option>
                <option value="tonsil swab">Tonsil Swab</option>
                <option value="trachea">Trachea</option>
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
                      @change="updateField"
              >
                <option value="" disabled>Select Destination ...</option>
                <option value="cahfs">CAHFS</option>
                <option value="nwhc">NWHC</option>
                <option value="nvdag">NV dept. Ag ADL</option>
                <option value="osu">OSU</option>
                <option value="uivdl">UofI VDL</option>
                <option value="waddl">WADDL</option>
                <option value="wcu">Western Carolina University</option>
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
            <textarea rows="3" class="textarea" v-model="sample.notes" @change="updateField"></textarea>
          </div>
          <p class="help">
            Any notes associated with the collection of this sample.
          </p>
        </div>
      </div>
    </div>


    <a class="button is-info is-medium" @click="addDynElement">Add Sample</a>

  </fieldset>
</template>

<script>
import { cloneDeep } from 'lodash'
import { emptyModel } from '../../util'

export default {
  name: 'Samples',

  data () {
    return {
      samples: cloneDeep(this.$store.state.encounterEntry.samples)
    }
  },

  methods: {
    addDynElement () {
      const model = Object.assign({}, emptyModel(this.samples[0], ''))
      this.samples.push(model)
      this.updateField()
    },

    deleteDynElement (index) {
      this.samples.splice(index, 1)
      this.updateField()
    },

    updateField () {
      this.$store.commit('encounterEntry/updateModel', {
        model: 'samples',
        data: cloneDeep(this.samples)
      })
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
