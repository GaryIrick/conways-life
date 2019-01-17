import React from 'react'
import { connect } from 'react-redux'
import nextGeneration from '../actions/nextGeneration'

const Controls = ({ generation, onNextClick }) => (
  <div>
    <div>
      Generation: {generation}
    </div>
    <div>
      <button onClick={onNextClick}>
        Next
    </button>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  generation: state.generation
})

const mapDispatchToProps = (dispatch) => ({
  onNextClick: () => dispatch(nextGeneration())
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
