import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SpeciesGroups from '@/components/SpeciesGroups'
import SpeciesGroup from '@/components/SpeciesGroup'
import AnimalLog from '@/components/AnimalLog'
import Projects from '@/components/Projects'
import NewProject from '@/components/NewProject'
import NewAnimal from '@/components/NewAnimal'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    }, {
      path: '/animal-log',
      name: 'AnimalLog',
      component: AnimalLog
    }, {
      path: '/animals/new',
      name: 'NewAnimal',
      component: NewAnimal
    }, {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }, {
      path: '/projects/new',
      name: 'NewProject',
      component: NewProject
    }
  ]
})
