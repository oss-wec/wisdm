<template lang="html">

  <div class="card" :style="cardBorder">
    <header class="card-header" :style="headerStyle">
      <div class="column">{{ animal.species }}</div>
      <div class="column is-3 has-text-right is-size-5 id-number">{{ animal.ndow_id }}</div>
    </header>
    <div class="card-content">
      <div class="content">

        <table>
          <tr>
            <td>{{ localDate(animal.date) }}</td>
            <td>Date</td>
          </tr>
          <tr>
            <td>{{ animal.project }}</td>
            <td>Project</td>
          </tr>
          <tr>
            <td>{{ animal.status }}</td>
            <td>Status</td>
          </tr>
          <tr>
            <td>{{ animal.sex }}</td>
            <td>Sex</td>
          </tr>
          <tr>
            <td>{{ animal.age }}</td>
            <td>Age</td>
          </tr>
        </table>

      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" :style="footerStyle" @click="toggleModal">Quick View</a>
      <a class="card-footer-item" :style="footerStyle">Full View</a>
    </footer>

    <div class="modal" :class="{ 'is-active': modalActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ animal.species }}</p>
          <button class="delete" @click="toggleModal"></button>
        </header>
        <section class="modal-card-body">
          <pre><code>{{ animal }}</code></pre>
        </section>
      </div>
    </div>
  </div>

</template>

<script scoped>
export default {
  props: ['animal'],

  data () {
    return {
      modalActive: false,
      colors: {
        snake: '#138a72',
        amphibian: '#16a085',
        turtle: '#19b698',
        lizard: '#1ccdaa',
        bat: '#493b2b',
        musteloid: '#564735',
        ungulate: '#69543e',
        rodent: '#796148',
        lagomorph: '#896e52',
        carnivore: '#997b5b',
        shrewform: '#a58768',
        owls: '#432051',
        raptor: '#522863',
        waterfowl: '#612f76',
        shorebird: '#703688',
        seabird: '#7f3d9a',
        upland: '#8e44ad',
        passerine: '#9b51ba',
        pico: '#a563c1',
        hummingbird: '#b076c8',
        salmonid: '#20638f',
        ostariophysian: '#2472a4',
        cyprinodontiformes: '#2980b9',
        perciformes: '#2e8ece',
        misc_fish: '#409ad5',
        bivalve: '#727f80',
        gastropod: '#7f8c8d',
        crustacean: '#409ad5'
      }
    }
  },

  methods: {
    localDate (isoStr) {
      let ds = new Date(isoStr)
      return ds.toLocaleDateString()
    },

    toggleModal () {
      this.modalActive = !this.modalActive
    }
  },

  computed: {
    headerStyle () {
      const color = this.colors[this.animal.grouping]
      const style = {
        backgroundColor: color,
        // borderWidth: '5px 1px 1px 1px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: color
      }

      if (this.isActive) {
        style.color = '#fff'
        style.backgroundColor = color
      }

      return style
    },

    cardBorder () {
      const color = this.colors[this.animal.grouping]
      return ({
        border: `1px solid ${color}`
      })
    },

    footerStyle () {
      return ({
        color: this.colors[this.animal.grouping]
      })
    }
  }
}
</script>

<style lang="css" scoped>
.id-number {
  font-weight: bolder;
}

/*.card {
  margin: 15px 0;
}*/

.card-header {
  color: #fff;
}

div.card-content {
  padding: 10px;
}

td {
  padding: 8px;
}

footer.card-footer {
  margin-top: 0;
}

div.test {
  background-color: grey;
  border: 1px solid black;
}
</style>
