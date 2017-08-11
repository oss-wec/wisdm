<template lang="html">
  <fieldset>
    <!-- ndow id input -->
    <div class="field">
      <label for="ndowid" class="label">NDOW ID</label>

      <div class="field has-addons">
        <div class="control is-expanded" :class="{ 'has-icons-left': errors.has('ndowid')}">
          <input type="text" class="input is-warning" placeholder="10342" name="ndowid"
                 v-model="model.ndowId"
                 v-validate="'required'"
                 :class="{ 'is-danger': errors.has('ndowid') }"
          >
          <span class="icon is-small is-left" v-if="errors.has('ndowid')">
            <i class="fa fa-times has-text-danger"></i>
          </span>
        </div>
        <div class="control">
          <a class="button is-info">Recapture</a>
        </div>
      </div>

      <p class="help">
        What is the NDOW ID for this animal?
        <span v-show="errors.has('ndowid')" class="help is-danger">NDOW ID IS REQUIRED</span>
      </p>
    </div>
    <!-- species input -->
    <div class="field">
      <label for="species" class="label">Species</label>

      <div class="control">
        <input type="text" class="input is-warning">
      </div>

      <p class="help">
        What species is this animal?
      </p>
    </div>
    <!-- project input -->
    <div class="field">
      <label for="project" class="label">Project</label>
      <div class="control">
        <input type="text" class="input is-warning">
      </div>
      <p class="help">
        With which project is this animal associated with?
      </p>
    </div>
    <!-- date input -->
    <div class="field">
      <label for="date" class="label">Date</label>
      <div class="control">
        <input type="date" class="input is-warning" name="date"
               v-model="model.date"
               v-validate="'required'"
               :class="{ 'is-danger': errors.has('date') }"
        >
      </div>
      <p class="help">
        What date was the animal encounterd?
        <span class="help is-danger" v-show="errors.has('date')">DATE IS REQUIRED</span>
      </p>
    </div>
    <!-- status input -->
    <div class="field">
      <label for="status" class="label">Status</label>
      <div class="control">
        <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('status') }">
          <select name="status" class="is-fullwidth"
                  v-model="model.status"
                  v-validate="'required'"
          >
            <option value=""></option>
            <option value="alive">Alive</option>
          </select>
        </div>
      </div>
      <p class="help">
        What is the life status of this animal?
        <span class="help is-danger" v-show="errors.has('status')">STATUS IS REQUIRED</span>
      </p>
    </div>

    <div>
      <pre><code>{{ $data }}</code></pre>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Encounter',

  data () {
    return {
      model: {
        ndowId: null,
        species: null,
        project: null,
        date: null
      }
    }
  }
}
</script>

<style lang="css">
</style>
