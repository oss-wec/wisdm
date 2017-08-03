import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:1313'
  // baseURL: 'http://34.208.55.29:1313'
})

export function getSpecies () {
  return api.get('/lists/species/all')
}
