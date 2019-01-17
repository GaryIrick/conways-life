import { combineReducers } from 'redux'
import population from './population'
import generation from './generation'

export default combineReducers({
  population,
  generation
})
