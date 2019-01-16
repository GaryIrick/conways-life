import React from 'react'
import T from 'prop-types'
import Grid from './grid'

const Life = ({ population, onNextClick }) => (
  <div>
    <Grid population={population} />
    <div style={{ clear: 'left', height: '20px' }} />
    <input type="button" value="Next" onClick={onNextClick} />
  </div>
)

Life.propTypes = {
  population: T.arrayOf(T.arrayOf(T.object)),
  onNextClick: T.func
}

export default Life
