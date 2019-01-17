import React from 'react'
import Grid from './grid'
import Controls from './Controls'

const Life = ({ population }) => (
  <div>
    <Grid population={population} />
    <div style={{ clear: 'left', height: '20px' }} />
    <Controls />
  </div>
)

export default Life
