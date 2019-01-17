import generateRandomPopulation from '../generateRandomPopulation'
import getNextGeneration from '../getNextGeneration'

const population = (state = [], action) => {
  switch (action.type) {
    case 'SET_SIZE':
      return generateRandomPopulation(action.size)

    case 'NEXT_GENERATION':
      return getNextGeneration(state)

    default:
      return state
  }
}

export default population
