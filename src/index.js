import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { createLogger } from 'redux-logger'
import 'font-awesome/css/font-awesome.css'
import './styles/styles.scss'
import rootReducer from './reducers'
import Life from './components/Life'

const logger = createLogger()

// We use redux-promise for some actions, and redux-thunk for others.  We could
// probably change this to use only one of them, but I wanted examples of both.
const store = createStore(rootReducer, applyMiddleware(thunk, promiseMiddleware, logger))

render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/:gridSize?" component={Life} />
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('main'))
