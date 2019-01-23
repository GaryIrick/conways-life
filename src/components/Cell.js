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

// E_NOTIMPL: Should onCellClick be added to CellWrapper.propTypes instead?
Cell.propTypes = {
  health: T.oneOf(['alive', 'dead']).isRequired,
  age: T.number.isRequired,
  onCellClick: T.func.isRequired
}

export class CellWrapper extends React.Component {
  render () {
    return <Cell {...this.props} />
  }
}

export const mapDispatchToProps = (dispatch) => ({
  onCellClick: (rowIndex, columnIndex) => dispatch(toggleCell(rowIndex, columnIndex))
})

export default connect(null, mapDispatchToProps)(CellWrapper)
