import React from 'react'
import { connect } from 'react-redux'
import Grid from './grid'
import Controls from './Controls'

const Life = ({ population }) => (
  <div>
    <Grid population={population} />
    <div style={{ clear: 'left', height: '20px' }} />
    <Controls />
  </div>
)

const mapStateToProps = (state) => ({
  population: state.population
})

export default connect(mapStateToProps)(Life)
