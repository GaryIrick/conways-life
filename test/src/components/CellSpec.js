import React from 'react'
import { shallow } from 'enzyme'
import { Cell, mapDispatchToProps } from '../../../src/components/Cell'

describe('components', () => {
  describe('Cell', () => {
    let props

    beforeEach(() => {
      props = {
        health: 'alive',
        age: 2,
        rowIndex: 3,
        columnIndex: 4,
        onCellClick: jest.fn()
      }
    })

    it('renders alive cell', () => {
      const component = shallow(<Cell {...props} />)
      expect(component.find('div').text()).toBe('2')
      expect(component.find('div').hasClass('alive')).toBeTruthy()
      expect(component.find('div').hasClass('dead')).toBeFalsy()
    })

    it('renders dead cell', () => {
      props.health = 'dead'
      const component = shallow(<Cell {...props} />)
      expect(component.find('div').text()).toBe('')
      expect(component.find('div').hasClass('alive')).toBeFalsy()
      expect(component.find('div').hasClass('dead')).toBeTruthy()
    })

    it('handles click', () => {
      const component = shallow(<Cell {...props} />)
      component.simulate('click')
      expect(props.onCellClick).toHaveBeenCalledTimes(1)
      expect(props.onCellClick).toHaveBeenCalledWith(3, 4)
    })

    describe('map dispatch to props', () => {
      it('dispatches toggle action', () => {
        const dispatch = jest.fn()
        const toggleCell = require('../../../src/actions/toggleCell').default
        const methods = mapDispatchToProps(dispatch)

        expect(methods.onCellClick).not.toBeUndefined()

        methods.onCellClick(5, 6)

        // E_NOTIMPL: Is this enough testing for toggleCell, or do
        // we expect to see a unit test for it as well?
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledWith(toggleCell(5, 6))
      })
    })
  })
})
