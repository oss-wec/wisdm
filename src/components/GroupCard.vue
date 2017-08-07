<template lang="html">
  <div class="column is-4">
    <div class="topic-card" :style="bgImg">
      <div class="topic-contianer has-text-centered">
        <h2 class="title topic-title">{{ capitalize(group.name) }}</h2>

        <a class="button is-info is-inverted is-outlined is-large" @click="goToGroup">
          <p class="trans">
            <span>{{ group.numSpecies }} Species</span>
            <span class="icon"><i class="fa fa-chevron-right"></i></span>
          </p>
        </a>

        <!-- <router-link :to="{ name: 'SpeciesGroup' }" class="button is-info is-inverted is-outlined is-large" @click="goToGroup">
          <p class="trans">
            <span>{{ group.numSpecies }} Species</span>
            <span class="icon"><i class="fa fa-chevron-right"></i></span>
          </p>
        </router-link> -->

      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'GroupCard',

  props: ['group'],

  data () {
    return {
      active: false,
      groups: {
        snake: { color: '#138a72', img: 'https://images.fineartamerica.com/images-medium-large/mojave-rattlesnake-bob-christopher.jpg' },
        amphibian: { color: '#16a085', img: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Spadefoot_pic.jpg' },
        turtle: { color: '#19b698', img: 'https://www.azgfd.com/PortalImages/images/Wildlife/Nongame/tort138_sep26_1993_closeup2_000.jpg' },
        lizard: { color: '#1ccdaa', img: 'http://animalstime.com/wp-content/uploads/2015/12/gila-monster-500x329.jpg' },
        bat: { color: '#493b2b', img: 'http://tevezzokosan.hu/wp-content/uploads/2015/09/denev%C3%A9r1.jpg' },
        musteloid: { color: '#564735', img: 'http://www.nhptv.org/wild/images/americanbadgerfws.jpg' },
        ungulate: { color: '#69543e', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/2015-06-10_Pronghorn_in_Yellowstone_National_Park%2C_USA_7862.jpg/640px-2015-06-10_Pronghorn_in_Yellowstone_National_Park%2C_USA_7862.jpg' },
        rodent: { color: '#796148', img: 'https://static.inaturalist.org/photos/2483067/large.jpg?1444067727' },
        lagomorph: { color: '#896e52', img: 'http://elelur.com/data_images/mammals/pika/pika-07.jpg' },
        carnivore: { color: '#997b5b', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Vulpes_macrotis_mutica_sitting.jpg/404px-Vulpes_macrotis_mutica_sitting.jpg' },
        shrewform: { color: '#a58768', img: 'http://www.worldlifeexpectancy.com/images/a/w/b/tupaia-belangeri/tupaia-belangeri.jpg' },
        owls: { color: '#432051', img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Athene_noctua_%28cropped%29.jpg' },
        raptor: { color: '#522863', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Young_American_Kestrel.jpeg/1024px-Young_American_Kestrel.jpeg' },
        waterfowl: { color: '#612f76', img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Wood_Duck_2%2C_St_James%27s_Park%2C_London_-_April_2012.jpg' },
        shorebird: { color: '#703688', img: 'http://d2fbmjy3x0sdua.cloudfront.net/cdn/farfuture/rXYbwmUAT3cHKTr4JYwDapE4_A1YGhbuJTQ20liLmZk/mtime:1422550576/sites/default/files/Piping_Plover_s36-37-016_l_1.jpg' },
        seabird: { color: '#7f3d9a', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pelikan_Walvis_Bay.jpg/1200px-Pelikan_Walvis_Bay.jpg' },
        upland: { color: '#8e44ad', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sharp-Tailed_Grouse_%2825406967553%29.jpg/1024px-Sharp-Tailed_Grouse_%2825406967553%29.jpg' },
        passerine: { color: '#9b51ba', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Aphelocoma_californica_in_Seattle_cropped.jpg/1200px-Aphelocoma_californica_in_Seattle_cropped.jpg' },
        pico: { color: '#a563c1', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Picoides_pubescens_f_CT3.jpg/768px-Picoides_pubescens_f_CT3.jpg' },
        hummingbird: { color: '#b076c8', img: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Calypte_costae.jpg' },
        salmonid: { color: '#20638f', img: 'http://fisheyeguyphotography.com/wp-content/gallery/NextGEN/cutthroat/colorado-cutthroat-rocky-mountain-national-park-colorado-107.jpg' },
        ostariophysian: { color: '#2472a4', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/A_close_view_of_two_santa_ana_speckled_dace_fishes_rhinichthys_osculus.jpg/640px-A_close_view_of_two_santa_ana_speckled_dace_fishes_rhinichthys_osculus.jpg' },
        cyprinodontiformes: { color: '#2980b9', img: 'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2016/01/ag4kkk-1200x800.jpg' },
        perciformes: { color: '#2e8ece', img: 'https://nature.mdc.mo.gov/sites/default/files/styles/centered_full/public/media/images/2010/05/green_sunfish.jpg?itok=OrzBL7JR' },
        misc_fish: { color: '#409ad5', img: 'http://fisheyeguyphotography.com/wp-content/gallery/NextGEN/cutthroat/colorado-cutthroat-rocky-mountain-national-park-colorado-107.jpg' },
        bivalve: { color: '#727f80', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Freshwater_mussels.jpg/640px-Freshwater_mussels.jpg' },
        gastropod: { color: '#7f8c8d', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Posthornschnecke1.jpg/480px-Posthornschnecke1.jpg' },
        crustacean: { color: '#409ad5', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Artemia_salina_4.jpg/640px-Artemia_salina_4.jpg' }
      }
    }
  },

  methods: {
    mouseOver () {
      this.active = !this.active
    },

    capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },

    goToGroup () {
      this.$store.dispatch('changeGroup', { group: this.group })
      router.push('species')
    }
  },

  computed: {
    bgImg () {
      const img = this.groups[this.group.name].img
      const style = {
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)), url('${img}')`
      }

      if (this.active) {
        style.backgorundImage = 'none'
        style.backgroundColor = this.groups[this.group.name].color
      }

      return style
    }
  }
}
</script>

<style lang="css" scoped>
.topic-title {
  color: #fff;
}

.topic-card {
  height: 350px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  display: flex;
}

/*.topic-card:hover {
  background-image: none;
  background: #327D88;
  background: -webkit-linear-gradient(to bottom left, #327D88, #43C6AC);
  background: linear-gradient(to bottom left, #327D88, #43C6AC);
}*/
</style>
