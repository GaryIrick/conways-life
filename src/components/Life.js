import React from 'react'
import { connect } from 'react-redux'
import Grid from './grid'
import Controls from './Controls'
import fetchNewPopulation from '../actions/fetchNewPopulation'

const defaultSize = 15

class Life extends React.Component {
  componentDidMount () {
    const match = this.props.match
    const size = match.params.gridSize ? match.params.gridSize : defaultSize
    this.props.initSize(size)
  }

  render () {
    return <div>
      <Controls />
      <div style={{ height: '20px' }} />
      <Grid />
    </div>
  }
}

const mapStateToProps = (state) => ({
  population: state.population
})

const mapDispatchToProps = (dispatch) => ({
  initSize: (size) => dispatch(fetchNewPopulation(size))
})

export default connect(mapStateToProps, mapDispatchToProps)(Life)
