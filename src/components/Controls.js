import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import makeBigger from '../actions/makeBigger'
import makeSmaller from '../actions/makeSmaller'
import clear from '../actions/clear'
import fetchNewPopulation from '../actions/fetchNewPopulation'
import fetchNextGeneration from '../actions/fetchNextGeneration'

export const Controls = ({ history, generation, population, onNextClick, onBiggerClick, onSmallerClick, onClearClick, onRandomizeClick }) => (
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

Controls.propTypes = {
  history: T.object.isRequired,
  generation: T.number.isRequired,
  population: T.arrayOf(T.arrayOf(T.object)).isRequired,
  onNextClick: T.func.isRequired,
  onBiggerClick: T.func.isRequired,
  onSmallerClick: T.func.isRequired,
  onRandomizeClick: T.func.isRequired,
  onClearClick: T.func.isRequired
}

export const mapStateToProps = (state) => ({
  generation: state.generation,
  size: state.population.length,
  population: state.population
})

export const mapDispatchToProps = (dispatch) => ({
  onNextClick: (population) => dispatch(fetchNextGeneration(population)),
  onBiggerClick: (history) => dispatch(makeBigger(history)),
  onSmallerClick: (history) => dispatch(makeSmaller(history)),
  onRandomizeClick: (size) => dispatch(fetchNewPopulation(size)),
  onClearClick: () => dispatch(clear())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Controls))
