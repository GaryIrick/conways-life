import population from '../../../src/reducers/population'
import { toggleCell, clear } from '../../../src/actions'
import { fetchNewPopulationAction } from '../../../src/actions/fetchNewPopulation'
import { fetchNextGenerationAction } from '../../../src/actions/fetchNextGeneration'

const alive = () => ({
  health: 'alive',
  age: 1
})

const dead = () => ({
  health: 'dead',
  age: 0
})

describe('reducers', () => {
  describe('population', () => {
    let oldState

    beforeEach(() => {
      oldState = [
        [alive(), dead()],
        [dead(), alive()]
      ]
    })

    it('toggles alive cell', () => {
      // E_NOTIMPL: Is it bad that we have an additional dependency on toggleCell(), even though
      // we aren't really testing it here?  The other option would be to spin up an action by
      // hand, and that seems brittle.
      const newState = population(oldState, toggleCell(1, 1))
      expect(newState[1][1]).toEqual(dead())
    })

    it('toggles dead cell', () => {
      const newState = population(oldState, toggleCell(0, 1))
      expect(newState[1][1]).toEqual(alive())
    })

    it('handles new population', () => {
      const newPopulation = [[alive()]]
      const newState = population(oldState, fetchNewPopulationAction(newPopulation))
      expect(newState).toBe(newPopulation)
    })

    it('handles next generation', () => {
      const newPopulation = [[alive()]]
      const newState = population(oldState, fetchNextGenerationAction(newPopulation))
      expect(newState).toBe(newPopulation)
    })

    it('clears population', () => {
      const emptyPopulation = [
        [dead(), dead()],
        [dead(), dead()]
      ]

      const newState = population(oldState, clear())
      expect(newState).toEqual(emptyPopulation)
    })

    it('returns original for unknown action', () => {
      const newState = population(oldState, { type: 'UNKNOWN' })
      expect(newState).toBe(oldState)
    })
  })
})
