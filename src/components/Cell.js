import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import toggleCell from '../actions/toggleCell'

export const Cell = ({ health, age, rowIndex, columnIndex, onCellClick }) => (
  <div className={classNames('cell', health)} onClick={() => {
    onCellClick(rowIndex, columnIndex)
  }} >
    {
      health === 'alive' ? age : ''
    }
  </div>
)

Cell.propTypes = {
  health: T.oneOf(['alive', 'dead']).isRequired,
  age: T.number.isRequired,
  onCellClick: T.func.isRequired
}

export const mapDispatchToProps = (dispatch) => ({
  onCellClick: (rowIndex, columnIndex) => dispatch(toggleCell(rowIndex, columnIndex))
})

export default connect(null, mapDispatchToProps)(Cell)
