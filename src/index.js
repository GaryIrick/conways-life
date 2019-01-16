import React from 'react'
import { render } from 'react-dom'
import 'font-awesome/css/font-awesome.css'
import './styles/styles.scss'
import Life from './components/Life'
import getNextGeneration from './getNextGeneration'
import generateRandomPopulation from './generateRandomPopulation'

// There is probably code here that should be re-factored into another file.  We'll
// clean that up when we move to Redux in a bit.

let gridSize = 20

let population = generateRandomPopulation(gridSize)

const onNextClick = () => {
  population = getNextGeneration(population)
  displayGrid(population)
}

const displayGrid = (population) => {
  render(<Life population={population} onNextClick={onNextClick} />, document.getElementById('main'))
}

displayGrid(population)
