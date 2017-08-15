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
            <div class="select is-fullwidth" :class="{ 'is-danger': errors.has('device-type') }">
              <select name="device-type" class="is-fullwidth" required
                      v-model="device.type"
                      v-validate="'required'"
              >
                <option value="" disabled selected hidden>Select Option...</option>
                <option value="gps">GPS</option>
                <option value="vhf">VHF</option>
              </select>
            </div>
          </div>
          <p class="help">
            What type of device is given to this animal
            <span class="help is-danger" v-show="errors.has('device-type')">DEVICE TYPE IS REQUIRED</span>
          </p>
        </div>
        <!-- device id input  -->
        <div class="field">
          <label for="device-id" class="label">Device ID
            <span class="icon is-small"><i class="fa fa-asterisk has-text-danger"></i></span>
          </label>
          <div class="control">
            <input type="text" class="input" placeholder="013026" name="device-id"
                   v-model="device.serial_num"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('device-id') }"
            >
          </div>
          <p class="help">
            What is the ID of the device given to this animal.
            <span class="help is-danger" v-show="errors.has('device-id')">
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
            <input type="text" class="input" placeholder="013026" name="freq"
                   v-model="device.frequency"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('freq') }"
            >
          </div>
          <p class="help">
            What is the frequency of the device given to this animal.
            <span class="help is-danger" v-show="errors.has('greq')">
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
            <input type="date" class="input" name="inservice"
                   v-model="device.inservice"
                   v-validate="'required'"
                   :class="{ 'is-danger': errors.has('inservice') }"
            >
          </div>
          <p class="help">
            When was this device given to this animal?
            <span class="help is-danger" v-show="errors.has('inservice')">
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
            >
          </div>
          <p class="help">
            When was this device removed from this animal, if it is missing?
          </p>
        </div>
      </div>
    </div>

    <a class="button is-info is-medium" @click="addDynElement">Add Device</a>

    <div>
      <pre><code>{{ $data }}</code></pre>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Devices',

  data () {
    return {
      model: {
        type: '',
        serial_num: null,
        frequency: null,
        inservice: null,
        outservice: null
      },
      devices: [
        {
          type: '',
          serial_num: null,
          frequency: null,
          inservice: null,
          outservice: null
        }
      ]
    }
  },

  methods: {
    addDynElement () {
      const model = Object.assign({}, this.model)

      this.devices.push(model)
    },

    deleteDynElement (index) {
      this.devices.splice(index, 1)
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
