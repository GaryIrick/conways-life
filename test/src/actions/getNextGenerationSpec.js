import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import { fetchNextGeneration } from '../../../src/actions'
import { fetchNextGenerationAction } from '../../../src/actions/fetchNextGeneration'

const middlewares = [thunk]
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
  describe('getNextGeneration', () => {
    afterEach(() => {
      fetchMock.restore()
    })

    it('make next generation API call', (done) => {
      // This action uses a thunk.
      const oldPopulation = [
        [alive(), dead()],
        [dead(), alive()]
      ]

      const nextPopulation = [
        [dead(), dead()],
        [dead(), dead()]
      ]

      fetchMock.postOnce(`/api/next`, {
        body: nextPopulation,
        headers: { 'content-type': 'application/json' }
      })

      const store = mockStore({
        nextPopulation
      })

      const expectedActions = [
        fetchNextGenerationAction(nextPopulation)
      ]

      // This action does NOT return a promise, so we don't have an easy way
      // to know when all of the async-ness is done.  So, we call dispatch()
      // and use setImmediate() to queue up the call to expect().
      //
      // This could be fixed by making the action call "return fetch(...)"
      // instead of just "fetch(...)", but I wanted to be contrary and
      // demonstrate a way to do this when there is no promise you can return.
      store.dispatch(fetchNextGeneration(oldPopulation))

      // This feels gross, there has to be a better way.  We take
      // advantage of the fact that our mocked call to fetch() will resolve
      // immediately without waiting on any async I/O.
      //
      // In the real world, we would just return the promise and be done with it!

      setImmediate(() => {
        const actions = store.getActions()
        expect(actions).toEqual(expectedActions)
        done()
      })
    })
  })
})
