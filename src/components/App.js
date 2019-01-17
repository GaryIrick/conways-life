import React from 'react'
import T from 'prop-types'
import Life from './Life'
import generateRandomPopulation from '../generateRandomPopulation'
import getNextGeneration from '../getNextGeneration'

const defaultGridSize = 20

class App extends React.Component {
  state = {};

  constructor (props) {
    super(props)
    // We make the assumption we'll only see numeric values here, since this is not a production app.
    this.state.gridSize = props.match.params.gridSize || defaultGridSize
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
