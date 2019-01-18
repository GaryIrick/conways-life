import React from 'react'
import { connect } from 'react-redux'
import Grid from './grid'
import Controls from './Controls'
import setSize from '../actions/setSize'

const defaultSize = 15

const Life = ({ match, population, initSize }) => {
  // E_NOTIMPL: Is this the right place to check to see if we need
  // to be initialized?  I need the URL parameter, but it feels weird.
  if (population.length === 0) {
    // E_NOTIMPL: Does it make more sense to use withRouter() instead of
    // match.params here?

    // We assume here that the URL has a valid number or nothing, we should
    // really check that.
    const size = match.params.gridSize ? match.params.gridSize : defaultSize
    initSize(size)
  }

  return <div>
    <Controls />
    <div style={{ height: '20px' }} />
    <Grid />
  </div>
}

const mapStateToProps = (state) => ({
  population: state.population
})

const mapDispatchToProps = (dispatch) => ({
  initSize: (size) => dispatch(setSize(size))
})

export default connect(mapStateToProps, mapDispatchToProps)(Life)
