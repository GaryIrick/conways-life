import React from 'react'
import { connect } from 'react-redux'
import nextGeneration from '../actions/nextGeneration'
import makeBigger from '../actions/makeBigger'
import makeSmaller from '../actions/makeSmaller'

const Controls = ({ generation, onNextClick, onBiggerClick, onSmallerClick }) => (
  <div>
    <div>
      Generation: {generation}
    </div>
    <div>
      <button onClick={onNextClick}>
        Next
      </button>
      &nbsp;
      <button onClick={onBiggerClick}>
        +
      </button>
      &nbsp;
      <button onClick={onSmallerClick}>
        -
      </button>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  generation: state.generation,
  size: state.population.length
})

const mapDispatchToProps = (dispatch) => ({
  onNextClick: () => dispatch(nextGeneration()),
  onBiggerClick: () => dispatch(makeBigger()),
  onSmallerClick: () => dispatch(makeSmaller())
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
