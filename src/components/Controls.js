import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import makeBigger from '../actions/makeBigger'
import makeSmaller from '../actions/makeSmaller'
import clear from '../actions/clear'
import fetchNewPopulation from '../actions/fetchNewPopulation'
import fetchNextGeneration from '../actions/fetchNextGeneration'

const Controls = ({ history, generation, population, onNextClick, onBiggerClick, onSmallerClick, onClearClick, onRandomizeClick }) => (
  <div>
    <div>
      Size: {population.length}
    </div>
    <div>
      Generation: {generation}
    </div>
    <div>
      <button onClick={() => onNextClick(population)}>
        Next
      </button>
      &nbsp;
      <button onClick={() => onBiggerClick(history)}>
        +
      </button>
      &nbsp;
      <button onClick={() => onSmallerClick(history)}>
        -
      </button>
      &nbsp;
      <button onClick={() => onRandomizeClick(population.length)}>
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
  size: state.population.length,
  population: state.population
})

const mapDispatchToProps = (dispatch) => ({
  onNextClick: (population) => dispatch(fetchNextGeneration(population)),
  onBiggerClick: (history) => dispatch(makeBigger(history)),
  onSmallerClick: (history) => dispatch(makeSmaller(history)),
  onClearClick: () => dispatch(clear()),
  onRandomizeClick: (size) => dispatch(fetchNewPopulation(size))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Controls))
