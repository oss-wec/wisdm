<template lang="html">
  <div>
    <div class="hero is-primary is-large hero-main">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Keep track of all your wildlife data
          </h1>
          <h2 class="subtitle">
            A cloud data management system for all your data storage needs
          </h2>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="columns">

          <div class="column is-4 has-text-centered">
            <span class="icon is-large"><i class="fa fa-table fa-3x color"></i></span>
            <p class="title has-text-centered">
              Easily enter data
            </p>
            <p class="subtitle has-text-centered">
              Flexible data entry forms that work for a variety of data entry needs.
            </p>
          </div>

          <div class="column is-4 has-text-centered">
            <span class="icon is-large"><i class="fa fa-search fa-3x color"></i></span>
            <p class="title has-text-centered">
              Search for data
            </p>
            <p class="subtitle has-text-centered">
              Convenient search and filtering makes finding data easy.
            </p>
          </div>

          <div class="column is-4 has-text-centered">
            <span class="icon is-large"><i class="fa fa-line-chart fa-3x color"></i></span>
            <p class="title has-text-centered">
              Analyze and export data
            </p>
            <p class="subtitle has-text-centered">
              Select data to analyze or export. Many analysis options are available in the application.
            </p>
          </div>

        </div>
      </div>
    </div>

    <div class="section hero is-primary hero-level">
      <!-- <div class="container"> -->
        <div class="level">

          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Animals</p>
              <p class="title">4,456</p>
            </div>
          </div>

          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Species</p>
              <p class="title">786</p>
            </div>
          </div>

          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Locations</p>
              <p class="title">2.6 M</p>
            </div>
          </div>

          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Labs</p>
              <p class="title">25,000</p>
            </div>
          </div>

        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  mounted: function () {
    this.$store.dispatch('getSpecies')
  }
}
</script>

<style lang="css" scoped>
i.color {
  color: #269E7F;
}

p.title {
  padding-top: 10px;
  color: #175d49;
}

p.subtitle {
  padding-top: 10px;
  color: #868787;
}

.hero-main {
  background: #327D88;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top left, #327D88, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top left, #327D88, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.hero-level {
  background: #327D88;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom left, #327D88, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom left, #327D88, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
