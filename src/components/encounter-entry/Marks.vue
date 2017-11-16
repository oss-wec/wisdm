<template lang="html">
  <fieldset>

    <div class="message is-info" v-for="(mark, index) in marks">
      <div class="message-header">
        Mark {{ index + 1 }}
        <a class="delete" @click="deleteDynElement(index)"></a>
      </div>
      <div class="message-body">
        <!-- mark type -->
        <div class="field">
          <label class="label">Mark Type
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('mark-type' + index) }">
              <select :name="'mark-type' + index" class="is-fullwidth" required
                      v-model="mark.mark_type"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="" disabled>Select Option...</option>
                <option value="band">Band</option>
                <option value="collar">Collar</option>
                <option value="ear tag">Ear Tag</option>
                <option value="pit tag">PIT tag</option>
                <option value="tattoo">Tattoo</option>
              </select>
            </div>
          </div>
          <p class="help">
            What type of mark is given to this animal
            <span class="help is-danger" v-show="errors.has('mark-type' + index)">MARK TYPE IS REQUIRED</span>
          </p>
        </div>
        <!-- mark id input  -->
        <div class="field">
          <label for="mark-id" class="label">Mark ID
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="text" class="input" placeholder="B13" :name="'mark-id' + index"
                   v-model="mark.mark_id"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('mark-id' + index) }"
                   @change="updateField"
            >
          </div>
          <p class="help">
            What is the ID of the mark given to this animal.
            <span class="help is-danger" v-show="errors.has('mark-id' + index)">
              MARK ID IS REQUIRED
            </span>
          </p>
        </div>
        <!-- mark color input -->
        <div class="field">
          <label for="mark-color" class="label">Mark Color
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('mark-color' + index) }">
              <select :name="'mark-color' + index" class="is-fullwidth" required
                      v-model="mark.mark_color"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="" disabled>Select Option...</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="gray">Gray</option>
                <option value="green">Green</option>
                <option value="lavender">Lavender</option>
                <option value="light blue">Light Blue</option>
                <option value="orange">Orange</option>
                <option value="pink">Pink</option>
                <option value="purple">Purple</option>
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="yellow">Yellow</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <p class="help">
            What is the color of the mark given to this animal? (can be "None")
            <span class="help is-danger" v-show="errors.has('mark-color' + index)">MARK COLOR IS REQUIRED</span>
          </p>
        </div>
        <!-- mark location input -->
        <div class="field">
          <label for="mark-loc" class="label">Mark Location
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="text" class="input" placeholder="B13" :name="'mark-loc' + index"
                   v-model="mark.mark_location"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('mark-loc' + index) }"
                   @change="updateField"
            >
          </div>
          <p class="help">
            Where on the animal is this mark located?
            <span class="help is-danger" v-show="errors.has('mark-loc' + index)">
              MARK LOCATION IS REQUIRED
            </span>
          </p>
        </div>
        <!-- date given input -->
        <div class="field">
          <label for="given" class="label">Date Given
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="date" class="input" :name="'given' + index"
                   v-model="mark.date_given"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('given' + index) }"
                   @change="updateField"
            >
          </div>
          <p class="help">
            When was this mark given to this animal?
            <span class="help is-danger" v-show="errors.has('given' + index)">
              DATE GIVEN IS REQUIRED
            </span>
          </p>
        </div>
        <!-- date removed input -->
        <div class="field">
          <label for="removed" class="label">Date Removed</label>
          <div class="control">
            <input type="date" class="input" name="removed"
                   v-model="mark.date_removed"
                   @change="updateField"
            >
          </div>
          <p class="help">
            When was this mark removed from this animal, if it is missing?
          </p>
        </div>
      </div>
    </div>

    <!-- <pre><code>{{ $data }}</code></pre> -->
    
    <a class="button is-info is-medium" @click="addDynElement">Add Mark</a>

  </fieldset>
</template>

<script>
import { cloneDeep } from 'lodash'
import { emptyModel } from '../../util'

export default {
  name: 'Marks',

  data () {
    return {
      marks: cloneDeep(this.$store.state.encounterEntry.marks)
    }
  },

  methods: {
    addDynElement () {
      const model = Object.assign({}, emptyModel(this.marks[0], ''))
      this.marks.push(model)
      this.updateField()
    },

    deleteDynElement (index) {
      this.marks.splice(index, 1)
      this.updateField()
    },

    updateField () {
      this.$store.commit('encounterEntry/updateModel', {
        model: 'marks',
        data: cloneDeep(this.marks)
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

.center-button {
  display: flex;
  justify-content: center;
}
</style>
