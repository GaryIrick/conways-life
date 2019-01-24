import { combineReducers } from 'redux'
import population from './population'
import generation from './generation'

// Currently we have 1 suite of tests for each reducer, it might
// make more sense to have 1 combined suite of tests for the combined
// reducer.
export default combineReducers({
  population,
  generation
})
