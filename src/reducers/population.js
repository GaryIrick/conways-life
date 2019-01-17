import generateRandomPopulation from '../generateRandomPopulation'
import getNextGeneration from '../getNextGeneration'

const population = (state = [], action) => {
  switch (action.type) {
    case 'MAKE_BIGGER':
      if (state.length >= 30) {
        return state
      }

      return generateRandomPopulation(state.length + 1)

    case 'MAKE_SMALLER':
      if (state.length <= 5) {
        return state
      }

      return generateRandomPopulation(state.length - 1)

    case 'NEXT_GENERATION':
      return getNextGeneration(state)

    default:
      return state
  }
}

export default population
