import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
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

  componentDidUpdate (prevProps) {
    if (prevProps) {
      const size = this.props.match.params.gridSize ? this.props.match.params.gridSize : defaultSize
      const prevSize = prevProps.match.params.gridSize ? prevProps.match.params.gridSize : defaultSize

      if (size !== prevSize) {
        // If our size changed, reset the grid.
        this.props.initSize(size)
      }
    }
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
  population: state.population,
  location: state.location
})

const mapDispatchToProps = (dispatch) => ({
  initSize: (size) => dispatch(fetchNewPopulation(size))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Life))
