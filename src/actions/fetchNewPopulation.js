import 'cross-fetch/polyfill'
import { FETCHED_NEW_POPULATION } from './types'

// This is poorly named.
export const fetchNewPopulationAction = (population) => ({
  type: FETCHED_NEW_POPULATION,
  population
})

// Here we return a promise.
export default (size) => {
  // E_NOTIMPL: What's the local convention for configuring the port here?
  return fetch(`/api/random/${size}`)
    .then(response => response.json())
    .then(json => fetchNewPopulationAction(json))
}
