import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Cell = ({ health, age }) => (
  <div className={classNames('cell', health)} >
    {
      health === 'alive' ? age : ''
    }
  </div>
)

Cell.propTypes = {
  health: T.oneOf(['alive', 'dead']).isRequired,
  age: T.number.isRequired
}

export default Cell
