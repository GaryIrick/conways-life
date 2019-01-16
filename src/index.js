import React from 'react'
import { render } from 'react-dom'
import 'font-awesome/css/font-awesome.css'
import './styles/styles.scss'
import Grid from './components/grid'
import getNextGeneration from './getNextGeneration'

// There is probably code here that should be re-factored into another file.  We'll
// clean that up when we move to Redux in a bit.

const getCell = (health) => {
  return {
    health: health,
    age: 1
  }
}

const getRow = (...cells) => {
  return cells.map((health) => getCell(health))
}

let population = [
  getRow('alive', 'dead', 'alive'),
  getRow('dead', 'alive', 'dead'),
  getRow('alive', 'dead', 'alive')
]

const onNextClick = () => {
  population = getNextGeneration(population)
  displayGrid(population)
}

const displayGrid = (population) => {
  // This should eventually be rolled up into a component.
  const root = (
    <div>
      <Grid population={population} />
      <div style={{ clear: 'left', height: '20px' }} />
      <input type="button" value="Next" onClick={onNextClick} />
    </div>
  )

  render(root, document.getElementById('main'))
}

displayGrid(population)
