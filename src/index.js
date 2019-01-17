import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'font-awesome/css/font-awesome.css'
import './styles/styles.scss'
import rootReducer from './reducers'
import generateRandomPopulation from './generateRandomPopulation'
import Life from './components/Life'

const prepopulatedStore = {
  generation: 1,
  population: generateRandomPopulation(15)
}

const store = createStore(rootReducer, prepopulatedStore)

render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/:gridSize?" component={Life} />
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('main'))
