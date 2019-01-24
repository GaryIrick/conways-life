import React from 'react'
import { shallow } from 'enzyme'
import { Controls, mapStateToProps, mapDispatchToProps } from '../../../src/components/Controls'

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

      it('dispatches clear action', () => {
        const clear = require('../../../src/actions/clear').default
        const methods = mapDispatchToProps(dispatch)
        expect(methods.onClearClick).not.toBeUndefined()
        methods.onClearClick()
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledWith(clear())
      })

      // For the rest of these, we don't care what args we send to the click method.
      // They all return either a thunk or a promise, and those will get tested
      // in the unit tests for those individual actions.

      it('dispatches next action', () => {
        const methods = mapDispatchToProps(dispatch)
        expect(methods.onNextClick).not.toBeUndefined()
        expect(typeof (methods.onNextClick)).toBe('function')
        methods.onNextClick(/* don't care about the args here */)
        expect(dispatch).toHaveBeenCalledTimes(1)
      })

      it('dispatches bigger action', () => {
        const methods = mapDispatchToProps(dispatch)
        expect(methods.onBiggerClick).not.toBeUndefined()
        expect(typeof (methods.onBiggerClick)).toBe('function')
        methods.onBiggerClick(/* don't care about the args here */)
        expect(dispatch).toHaveBeenCalledTimes(1)
      })

      it('dispatches smaller action', () => {
        const methods = mapDispatchToProps(dispatch)
        expect(methods.onSmallerClick).not.toBeUndefined()
        expect(typeof (methods.onSmallerClick)).toBe('function')
        methods.onSmallerClick(/* don't care about the args here */)
        expect(dispatch).toHaveBeenCalledTimes(1)
      })

      it('dispatches randomize action', () => {
        const methods = mapDispatchToProps(dispatch)
        expect(methods.onRandomizeClick).not.toBeUndefined()
        expect(typeof (methods.onRandomizeClick)).toBe('function')
        methods.onRandomizeClick(/* don't care about the args here */)
        expect(dispatch).toHaveBeenCalledTimes(1)
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
  })
})
