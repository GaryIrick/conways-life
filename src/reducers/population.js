import generateRandomPopulation from '../generateRandomPopulation'
import getNextGeneration from '../getNextGeneration'

const population = (state = [], action) => {
  switch (action.type) {
    case 'SET_SIZE':
      return generateRandomPopulation(action.size)

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

    case 'TOGGLE_CELL':
      const cell = state[action.rowIndex][action.columnIndex]
      // E_NOTIMPL:  This is GROSS, figure out the correct idiom.
      const newState = JSON.parse(JSON.stringify(state))
      const newCell = {}

      if (cell.health === 'alive') {
        newCell.health = 'dead'
        newCell.age = 0
      } else {
        newCell.health = 'alive'
        newCell.age = 1
      }

      newState[action.rowIndex][action.columnIndex] = newCell
      return newState

    case 'CLEAR':
      const clearState = []

      for (let i = 0; i < state.length; i++) {
        const clearRow = []

        for (let j = 0; j < state.length; j++) {
          clearRow.push({
            health: 'dead',
            age: 0
          })
        }

        clearState.push(clearRow)
      }

      return clearState

    default:
      return state
  }
}

export default population
