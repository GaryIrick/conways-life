import { FETCHED_NEW_POPULATION, FETCHED_NEXT_GENERATION, CLEAR } from '../actions/types'

const generation = (state = 1, action) => {
  switch (action.type) {
    case FETCHED_NEW_POPULATION:
    case CLEAR:
      return 1

    case FETCHED_NEXT_GENERATION:
      return state + 1

    default:
      return state
  }
}

export default generation
