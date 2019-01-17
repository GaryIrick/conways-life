import React from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
import classNames from 'classnames'
import toggleCell from '../actions/toggleCell'

const Cell = ({ health, age, rowIndex, columnIndex, onCellClick }) => (
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
  age: T.number.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  onCellClick: (rowIndex, columnIndex) => dispatch(toggleCell(rowIndex, columnIndex))
})

export default connect(null, mapDispatchToProps)(Cell)
