import React from 'react'
import T from 'prop-types'
import Life from './Life'
import generateRandomPopulation from '../generateRandomPopulation'
import getNextGeneration from '../getNextGeneration'

class App extends React.Component {
  state = {};

  constructor (props) {
    super(props)
    this.state.gridSize = props.gridSize
    this.onNextClick = this.onNextClick.bind(this)
  }

  componentWillMount () {
    const population = generateRandomPopulation(this.state.gridSize)
    this.setState({ population })
  }

  onNextClick () {
    const population = getNextGeneration(this.state.population)
    this.setState({ population })
  }

  render () {
    return <Life population={this.state.population} onNextClick={this.onNextClick} />
  }
}

App.propTypes = {
  gridSize: T.number.isRequired
}

export default App
