import generation from '../../../src/reducers/generation'
import { clear } from '../../../src/actions'
import { fetchNewPopulationAction } from '../../../src/actions/fetchNewPopulation'
import { fetchNextGenerationAction } from '../../../src/actions/fetchNextGeneration'

describe('reducers', () => {
  describe('generation', () => {
    let oldState

    beforeEach(() => {
      oldState = 5
    })

    it('uses default state', () => {
      const newState = generation(undefined, clear())
      expect(newState).toBe(1)
    })

    it('reset after clear', () => {
      const newState = generation(oldState, clear())
      expect(newState).toBe(1)
    })

    it('reset after new population', () => {
      const newState = generation(oldState, fetchNewPopulationAction([]))
      expect(newState).toBe(1)
    })

    it('increments after next generation', () => {
      const newState = generation(oldState, fetchNextGenerationAction([]))
      expect(newState).toBe(6)
    })

    it('returns original for unknown action', () => {
      const newState = generation(oldState, { type: 'UNKNOWN' })
      expect(newState).toBe(oldState)
    })
  })
})
