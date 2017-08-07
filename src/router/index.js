import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SpeciesGroups from '@/components/SpeciesGroups'
import SpeciesGroup from '@/components/SpeciesGroup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/groups',
      name: 'Groups',
      component: SpeciesGroups
    }, {
      path: '/species',
      name: 'SpeciesGroup',
      component: SpeciesGroup
    }
  ]
})
