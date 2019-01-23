import React from 'react'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import { Controls, mapStateToProps, mapDispatchToProps } from '../../../src/components/Controls'
import fetchNewPopulation from '../../../src/actions/fetchNewPopulation'
import fetchNextGeneration from '../../../src/actions/fetchNextGeneration'

const middlewares = [promiseMiddleware, thunk]
const mockStore = configureMockStore(middlewares)

const alive = () => ({
  health: 'alive',
  age: 1
})

const dead = () => ({
  health: 'dead',
  age: 0
})

describe('components', () => {
  describe('Controls', () => {
    let component, population, generation, state, props

    beforeEach(() => {
      population = [
        [alive(), dead()],
        [dead(), alive()]
      ]

      generation = 2

      state = {
        population,
        size: population.length,
        generation
      }

      props = {
        history: {
        },
        generation,
        population,
        onNextClick: jest.fn(),
        onBiggerClick: jest.fn(),
        onSmallerClick: jest.fn(),
        onClearClick: jest.fn(),
        onRandomizeClick: jest.fn()
      }

      component = shallow(<Controls {...props} />)
    })

    it('map state to props', () => {
      const mappedProps = mapStateToProps(state)
      expect(mappedProps.generation).toBe(generation)
      expect(mappedProps.size).toBe(population.length)
      expect(mappedProps.population).toEqual(population)
    })

    describe('map dispatch to props', () => {
      let dispatch

      beforeEach(() => {
        dispatch = jest.fn()
      })

      it('dispatches next action', () => {
        // E_NOTIMPL: What else can we do here?  We test the full async
        // action elsewhere, is this enough or am I missing part of the
        // test?
        const methods = mapDispatchToProps(dispatch)
        expect(methods.onNextClick).not.toBeUndefined()
        expect(typeof (methods.onNextClick)).toBe('function')
      })

      it('dispatches bigger action', () => {
        const methods = mapDispatchToProps(dispatch)
        expect(methods.onBiggerClick).not.toBeUndefined()
        expect(typeof (methods.onBiggerClick)).toBe('function')
      })

      it('dispatches smaller action', () => {
        const methods = mapDispatchToProps(dispatch)
        expect(methods.onSmallerClick).not.toBeUndefined()
        expect(typeof (methods.onSmallerClick)).toBe('function')
      })

      it('dispatches randomize action', () => {
        const methods = mapDispatchToProps(dispatch)
        expect(methods.onRandomizeClick).not.toBeUndefined()
        expect(typeof (methods.onRandomizeClick)).toBe('function')
      })

      it('dispatches clear action', () => {
        const clear = require('../../../src/actions/clear').default
        const methods = mapDispatchToProps(dispatch)
        expect(methods.onClearClick).not.toBeUndefined()
        methods.onClearClick()
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledWith(clear())
      })
    })

    it('renders buttons', () => {
      const buttons = component.find('button')
      expect(buttons).toHaveLength(5)
      expect(buttons.at(0).text()).toBe('Next')
      expect(buttons.at(1).text()).toBe('+')
      expect(buttons.at(2).text()).toBe('-')
      expect(buttons.at(3).text()).toBe('Randomize')
      expect(buttons.at(4).text()).toBe('Clear')
    })

    describe('button handlers', () => {
      it('next', () => {
        component.find('button').at(0).simulate('click')
        expect(props.onNextClick).toHaveBeenCalledTimes(1)
        expect(props.onNextClick).toHaveBeenCalledWith(props.population)
      })

      it('bigger', () => {
        component.find('button').at(1).simulate('click')
        expect(props.onBiggerClick).toHaveBeenCalledTimes(1)
        expect(props.onBiggerClick).toHaveBeenCalledWith(props.history)
      })

      it('smaller', () => {
        component.find('button').at(2).simulate('click')
        expect(props.onSmallerClick).toHaveBeenCalledTimes(1)
        expect(props.onSmallerClick).toHaveBeenCalledWith(props.history)
      })

      it('randomize', () => {
        component.find('button').at(3).simulate('click')
        expect(props.onRandomizeClick).toHaveBeenCalledTimes(1)
        expect(props.onRandomizeClick).toHaveBeenCalledWith(population.length)
      })

      it('clear', () => {
        component.find('button').at(4).simulate('click')
        expect(props.onClearClick).toHaveBeenCalledTimes(1)
        expect(props.onClearClick).toHaveBeenCalledWith()
      })
    })

    // E_NOTIMPL: Does this belong here, or should each action be tested in its own file?
    describe('async actions', () => {
      afterEach(() => {
        fetchMock.restore()
      })

      it('new population', async () => {
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
          population
        })

        const expectedActions = [
          {
            type: 'FETCHED_NEW_POPULATION',
            population: newPopulation
          }
        ]

        await store.dispatch(fetchNewPopulation(2))
        expect(store.getActions()).toEqual(expectedActions)
      })

      it('next generation', (done) => {
        // This action uses a thunk.
        const nextPopulation = [
          [dead(), dead()],
          [dead(), dead()]
        ]

        fetchMock.postOnce(`http://localhost:5001/api/next`, {
          body: nextPopulation,
          headers: { 'content-type': 'application/json' }
        })

        const store = mockStore({
          population
        })

        const expectedActions = [
          {
            type: 'FETCHED_NEXT_GENERATION',
            population: nextPopulation
          }
        ]

        // This action does NOT return a promise, so we don't have an easy way
        // to know when all of the async-ness is done.  So, we call dispatch()
        // and use setImmediate() to queue up the call to expect().
        //
        // This could be fixed by making the action call "return fetch(...)"
        // instead of just "fetch(...)", but I wanted to be contrary and
        // demonstrate a way to do this when there is no promise you can return.
        store.dispatch(fetchNextGeneration(population))

        // E_NOTIMPL:  This feels gross, there has to be a better way.  We take
        // advantage of the fact that our mocked call to fetch() will resolve
        // immediately without waiting on any async I/O.
        setImmediate(() => {
          const actions = store.getActions()
          expect(actions).toEqual(expectedActions)
          done()
        })
      })
    })
  })
})
