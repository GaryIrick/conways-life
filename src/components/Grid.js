import React from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
import Cell from './Cell'

// Population is expressed as an array of rows, each row is an array of health states.

const Grid = ({ population }) => {
  const getRow = (row, rowIndex) => row.map((cell, columnIndex) => (
    <Cell health={cell.health} age={cell.age} rowIndex={rowIndex} columnIndex={columnIndex} key={columnIndex} />
  ))

  return <div className="grid"> {
    population.map((row, rowIndex) => (
      <div key={rowIndex} className="gridRow">
        {
          getRow(row, rowIndex)
        }
      </div>
    ))
  }
  </div>
}

Grid.propTypes = {
  population: T.arrayOf(T.arrayOf(T.object))
}

const mapStateToProps = (state) => ({
  population: state.population
})

export default connect(mapStateToProps)(Grid)
