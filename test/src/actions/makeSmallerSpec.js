import { makeSmaller } from '../../../src/actions'
import getFakePopulation from './getFakePopulation'

describe('actions', () => {
  describe('makeSmaller', () => {
    it('history is updated when size is not too small', () => {
      const history = {
        push: jest.fn()
      }

      const dispatch = jest.fn()
      const getState = () => ({
        population: getFakePopulation(10)
      })

      const action = makeSmaller(history)
      action(dispatch, getState)
      expect(history.push).toHaveBeenCalledTimes(1)
      expect(history.push).toHaveBeenCalledWith('/9')
    })

    it('history is not updated when size is too small', () => {
      const history = {
        push: jest.fn()
      }

      const dispatch = jest.fn()
      const getState = () => ({
        population: getFakePopulation(3)
      })

      const action = makeSmaller(history)
      action(dispatch, getState)
      expect(history.push).toHaveBeenCalledTimes(0)
    })
  })
})
