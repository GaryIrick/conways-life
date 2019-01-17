import React from 'react'
import { connect } from 'react-redux'
import nextGeneration from '../actions/nextGeneration'
import makeBigger from '../actions/makeBigger'
import makeSmaller from '../actions/makeSmaller'
import clear from '../actions/clear'

const Controls = ({ generation, onNextClick, onBiggerClick, onSmallerClick, onClearClick }) => (
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
      &nbsp;
      <button onClick={onClearClick}>
        Clear
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
  onSmallerClick: () => dispatch(makeSmaller()),
  onClearClick: () => dispatch(clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
