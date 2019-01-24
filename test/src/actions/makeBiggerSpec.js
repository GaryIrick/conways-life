import { makeBigger } from '../../../src/actions'
import getFakePopulation from './getFakePopulation'

describe('actions', () => {
  describe('makeBigger', () => {
    it('history is updated when size is not too large', () => {
      const history = {
        push: jest.fn()
      }

      const dispatch = jest.fn()
      const getState = () => ({
        population: getFakePopulation(10)
      })

      const action = makeBigger(history)
      action(dispatch, getState)
      expect(history.push).toHaveBeenCalledTimes(1)
      expect(history.push).toHaveBeenCalledWith('/11')
    })

    it('history is not updated when size is too big', () => {
      const history = {
        push: jest.fn()
      }

      const dispatch = jest.fn()
      const getState = () => ({
        population: getFakePopulation(40)
      })

      const action = makeBigger(history)
      action(dispatch, getState)
      expect(history.push).toHaveBeenCalledTimes(0)
    })
  })
})
