import { combineReducers } from 'redux'
import population from './population'
import generation from './generation'

// E_NOTIMPL: Would we write tests for the combined reducer, or just the individual reducers?
// It doesn't feel useful to write a test for this.
export default combineReducers({
  population,
  generation
})
