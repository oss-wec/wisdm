<template lang="html">
  <fieldset>

    <div class="message is-info" v-for="(device, index) in devices">
      <div class="message-header">
        Device {{ index + 1 }}
        <a class="delete" @click="deleteDynElement(index)"></a>
      </div>
      <div class="message-body">
        <!-- device type -->
        <div class="field">
          <label for="status" class="label">Device Type
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('device-type' + index) }">
              <select :name="'device-type' + index" class="is-fullwidth" required
                      v-model="device.type"
                      v-validate="'required'"
                      @change="updateField"
              >
                <option value="" disabled selected hidden>Select Option...</option>
                <option value="gps">GPS</option>
                <option value="vhf">VHF</option>
              </select>
            </div>
          </div>
          <p class="help">
            What type of device is given to this animal
            <span class="help is-danger" v-show="errors.has('device-type' + index)">DEVICE TYPE IS REQUIRED</span>
          </p>
        </div>
        <!-- device id input  -->
        <div class="field">
          <label for="device-id" class="label">Device ID
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="text" class="input" placeholder="013026" :name="'device-id' + index"
                   v-model="device.serial_num"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('device-id' + index) }"
                   @change="updateField"
            >
          </div>
          <p class="help">
            What is the ID of the device given to this animal.
            <span class="help is-danger" v-show="errors.has('device-id' + index)">
              DEVICE ID IS REQUIRED
            </span>
          </p>
        </div>
        <!-- device frequency input -->
        <div class="field">
          <label for="freq" class="label">Frequency
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="text" class="input" placeholder="013026" :name="'freq' + index"
                   v-model="device.frequency"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('freq' + index) }"
                   @change="updateField"
            >
          </div>
          <p class="help">
            What is the frequency of the device given to this animal.
            <span class="help is-danger" v-show="errors.has('freq' + index)">
              FREQUENCY IS REQUIRED
            </span>
          </p>
        </div>
        <!-- date given input -->
        <div class="field">
          <label for="inservice" class="label">Inservice
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="date" class="input" :name="'inservice' + index"
                   v-model="device.inservice"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('inservice' + index) }"
                   @change="updateField"
            >
          </div>
          <p class="help">
            When was this device given to this animal?
            <span class="help is-danger" v-show="errors.has('inservice' + index)">
              INSERVICE DATE IS REQUIRED
            </span>
          </p>
        </div>
        <!-- date removed input -->
        <div class="field">
          <label for="outservice" class="label">Outservice</label>
          <div class="control">
            <input type="date" class="input" name="outservice"
                   v-model="device.outservice"
                   @change="updateField"
            >
          </div>
          <p class="help">
            When was this device removed from this animal, if it is missing?
          </p>
        </div>
      </div>
    </div>

    <a class="button is-info is-medium" @click="addDynElement">Add Device</a>

  </fieldset>
</template>

<script>
import { cloneDeep } from 'lodash'
import { emptyModel } from '../../util'

export default {
  name: 'Devices',

  data () {
    return {
      devices: cloneDeep(this.$store.state.encounterEntry.devices)
    }
  },

  methods: {
    addDynElement () {
      const model = Object.assign({}, emptyModel(this.devices[0], ''))
      this.devices.push(model)
      this.updateField()
    },

    deleteDynElement (index) {
      this.devices.splice(index, 1)
    },

    updateField () {
      this.$store.commit('encounterEntry/updateModel', {
        model: 'devices',
        data: cloneDeep(this.devices)
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
