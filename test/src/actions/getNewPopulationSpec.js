import promiseMiddleware from 'redux-promise'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import { fetchNewPopulation } from '../../../src/actions'
import { fetchNewPopulationAction } from '../../../src/actions/fetchNewPopulation'

const middlewares = [promiseMiddleware]
const mockStore = configureMockStore(middlewares)

const alive = () => ({
  health: 'alive',
  age: 1
})

const dead = () => ({
  health: 'dead',
  age: 0
})

describe('actions', () => {
  describe('getNewPopulation', () => {
    afterEach(() => {
      fetchMock.restore()
    })

    it('make new population API call', async () => {
      // This action uses a promise.
      const newPopulation = [
        [alive(), dead()],
        [dead(), alive()]
      ]

      fetchMock.getOnce(`http://localhost:5001/api/random/2`, {
        body: newPopulation,
        headers: { 'content-type': 'application/json' }
      })

      const store = mockStore({
        newPopulation
      })

      const expectedActions = [
        fetchNewPopulationAction(newPopulation)
      ]

      await store.dispatch(fetchNewPopulation(2))
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
