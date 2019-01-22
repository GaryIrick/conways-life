import React from 'react'
import { connect } from 'react-redux'
import makeBigger from '../actions/makeBigger'
import makeSmaller from '../actions/makeSmaller'
import clear from '../actions/clear'
import fetchNewPopulation from '../actions/fetchNewPopulation'
import fetchNextGeneration from '../actions/fetchNextGeneration'

const Controls = ({ size, generation, onNextClick, onBiggerClick, onSmallerClick, onClearClick, onRandomizeClick }) => (
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
      <button onClick={() => onRandomizeClick(size)}>
        Randomize
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
  onNextClick: () => dispatch(fetchNextGeneration()),
  onBiggerClick: () => dispatch(makeBigger()),
  onSmallerClick: () => dispatch(makeSmaller()),
  onClearClick: () => dispatch(clear()),
  onRandomizeClick: (size) => dispatch(fetchNewPopulation(size))
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
