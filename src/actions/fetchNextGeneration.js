import 'cross-fetch/polyfill'
import { FETCHED_NEXT_GENERATION } from './types'

// This is poorly named.
export const fetchNextGenerationAction = (population) => ({
  type: FETCHED_NEXT_GENERATION,
  population
})

// Here we return a thunk.
export default (population) => {
  return (dispatch) => {
    fetch(`/api/next`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(population)
    })
      .then(response => response.json())
      .then(json => dispatch(fetchNextGenerationAction(json)))
  }
}
