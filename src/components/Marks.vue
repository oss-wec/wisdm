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
          <label for="status" class="label">Mark Type
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('mark-type') }">
              <select name="mark-type" class="is-fullwidth" required
                      v-model="mark.markType"
                      v-validate="'required'"
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
            <span class="help is-danger" v-show="errors.has('mark-type')">MARK TYPE IS REQUIRED</span>
          </p>
        </div>
        <!-- mark id input  -->
        <div class="field">
          <label for="mark-id" class="label">Mark ID
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="text" class="input" placeholder="B13" name="mark-id"
                   v-model="mark.markId"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('mark-id') }"
            >
          </div>
          <p class="help">
            What is the ID of the mark given to this animal.
            <span class="help is-danger" v-show="errors.has('mark-id')">
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
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('mark-color') }">
              <select name="mark-color" class="is-fullwidth"
                      v-model="mark.markColor"
                      v-validate="'required'"
              >
                <option value=""></option>
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
            <span class="help is-danger" v-show="errors.has('mark-color')">MARK COLOR IS REQUIRED</span>
          </p>
        </div>
        <!-- mark location input -->
        <div class="field">
          <label for="mark-loc" class="label">Mark Location
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="text" class="input is-warning" placeholder="B13" name="mark-loc"
                   v-model="mark.markLoc"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('mark-loc') }"
            >
          </div>
          <p class="help">
            Where on the animal is this mark located?
            <span class="help is-danger" v-show="errors.has('mark-loc')">
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
            <input type="date" class="input" name="given"
                   v-model="mark.given"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('given') }"
            >
          </div>
          <p class="help">
            When was this mark given to this animal?
            <span class="help is-danger" v-show="errors.has('given')">
              DATE GIVEN IS REQUIRED
            </span>
          </p>
        </div>
        <!-- date removed input -->
        <div class="field">
          <label for="removed" class="label">Date Removed</label>
          <div class="control">
            <input type="date" class="input" name="removed"
                   v-model="mark.removed"
            >
          </div>
          <p class="help">
            When was this mark removed from this animal, if it is missing?
          </p>
        </div>
      </div>
    </div>

    <a class="button is-info is-medium" @click="addDynElement">Add Mark</a>

    <div>
      <pre><code>{{ $data }}</code></pre>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Marks',

  data () {
    return {
      marks: [
        {
          markType: '',
          markId: null,
          markColor: null,
          markLoc: null,
          given: null,
          removed: null
        }, {
          markType: '',
          markId: null,
          markColor: null,
          markLoc: null,
          given: null,
          removed: null
        }
      ]
    }
  },

  methods: {
    emptyModel () {
      const obj = Object.assign({}, this.marks[0])
      for (let k in obj) {
        obj[k] = null
      }
      return obj
    },

    addDynElement () {
      this.marks.push(this.emptyModel())
    },

    deleteDynElement (index) {
      this.marks.splice(index, 1)
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
