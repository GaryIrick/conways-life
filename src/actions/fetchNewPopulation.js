import 'cross-fetch/polyfill'
import { FETCHED_NEW_POPULATION } from './types'

export const fetchNewPopulationAction = (population) => ({
  type: FETCHED_NEW_POPULATION,
  population
})

// Here we return a promise.
export default (size) => {
  return fetch(`http://localhost:5001/api/random/${size}`)
    .then(response => response.json())
    .then(json => fetchNewPopulationAction(json))
}
