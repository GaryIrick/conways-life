import { FETCHED_NEW_POPULATION, FETCHED_NEXT_GENERATION, TOGGLE_CELL, CLEAR } from '../actions/types'

const cloneDeep = require('lodash/cloneDeep')

const population = (state = [], action) => {
  switch (action.type) {
    case FETCHED_NEW_POPULATION:
    case FETCHED_NEXT_GENERATION:
      return action.population

    case TOGGLE_CELL:
      const cell = state[action.rowIndex][action.columnIndex]
      const newState = cloneDeep(state)
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

    case CLEAR:
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
