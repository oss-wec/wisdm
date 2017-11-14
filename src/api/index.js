import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
  // baseURL: 'https://api.wisdm.xyz'
})

export function getSpecies () {
  // return api.get('/lists/species/all')
  return api.get('/species')
}

export function getAnimals () {
  return api.get('/elements')
}

export function getProjects () {
  return api.get('/projects')
}

export function getProjectList () {
  return api.get('lists/projects')
}

export function createProject (data) {
  return api.post('/projects', data)
}

export function createEncounter (data) {
  return api.post('elements', data)
}

export function getAllUsers () {
  return api.get('/users')
}

export function findById (id) {
  return api.get(`/elements/${id}`, { params: { id } })
}
