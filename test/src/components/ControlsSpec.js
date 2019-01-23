
import React from 'react'
import { shallow } from 'enzyme'
import { Controls, mapStateToProps } from '../../../src/components/Controls'

describe('components', () => {
  describe('Controls', () => {
    const alive = () => ({
      health: 'alive',
      age: 1
    })

    const dead = () => ({
      health: 'dead',
      age: 0
    })

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
