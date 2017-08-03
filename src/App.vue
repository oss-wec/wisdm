<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/Nav'
import Footer from './components/Footer'

import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'

export default {
  name: 'app',

  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="css">
</style>
