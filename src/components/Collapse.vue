<template lang="html">
  <div class="card">
    <header class="card-header" @click="toggle">
      <p class="card-header-title">
        <slot name="header"> header </slot></p>
      <a class="card-header-icon">
        <span class="icon">
          <i class="fa fa-angle-up" v-if="collapse"></i>
          <i class="fa fa-angle-down" v-if="!collapse"></i>
        </span>
      </a>
    </header>

    <div class="card-content" v-if="collapse">
      <div class="content">
        <slot name="content"> content </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',

  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  data () {
    return {
      collapse: this.visible
    }
  },

  methods: {
    toggle () {
      this.collapse = !this.collapse
    }
  }
}
</script>

<style lang="css" scoped>
</style>
