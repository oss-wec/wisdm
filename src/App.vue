<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Navigation from './components/Nav'
import Foot from './components/Foot'
import store from './store'

import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'

export default {
  name: 'app',

  store,

  components: {
    Navigation,
    Foot
  }
}
</script>

<style lang="css">
</style>
