import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'font-awesome/css/font-awesome.css'
import './styles/styles.scss'
import rootReducer from './reducers'
import Life from './components/Life'

const store = createStore(rootReducer, applyMiddleware(thunk))

render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/:gridSize?" component={Life} />
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('main'))
