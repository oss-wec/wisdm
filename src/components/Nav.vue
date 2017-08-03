<template lang="html">
  <nav class="navbar">
    <!-- <div class="container"> -->
      <div class="navbar-brand">
        <a href="#" class="navbar-item">
          <span class="icon"><i class="fa fa-home"></i></span>
        </a>

        <div class="navbar-burger burger" :class="{'is-active': burger }" @click="toggleBurger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{'is-active': burger}">
        <div class="navbar-start">
          <a href="#" class="navbar-item">Animal Log</a>
          <router-link :to="{ name: 'Groups' }" class="navbar-item">Species Groups</router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a href="#" class="navbar-link">Features</a>
            <div class="navbar-dropdown">
              <a href="#" class="navbar-item">Feature 1</a>
              <a href="#" class="navbar-item">Feature 2</a>
              <a href="#" class="navbar-item">Feature 3</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a href="#" class="navbar-link">
              <span class="icon"><i class="fa fa-plus color"></i></span>
            </a>
            <div class="navbar-dropdown">
              <a href="#" class="navbar-item">New Encounter</a>
              <a href="#" class="navbar-item">New Project</a>
              <a href="#" class="navbar-item">New Species</a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a href="#" class="navbar-link">
              <span class="icon"><i class="fa fa-user-o color"></i></span>
            </a>
            <div class="navbar-dropdown">
              <a href="#" class="navbar-item">New Encounter</a>
              <a href="#" class="navbar-item">New Project</a>
              <a href="#" class="navbar-item">New Species</a>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </nav>
</template>

<script>
export default {
  name: 'Navigation',

  data () {
    return {
      burger: false
    }
  },

  methods: {
    toggleBurger () {
      this.burger = !this.burger
    }
  }
}
</script>

<style lang="css" scoped>
i.color {
  color: #269E7F;
}
</style>
