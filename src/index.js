import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { render } from 'react-dom'
import 'font-awesome/css/font-awesome.css'
import './styles/styles.scss'
import App from './components/App'

render((
  <BrowserRouter>
    <div>
      <Route path="/:gridSize?" component={App} />
    </div>
  </BrowserRouter>
), document.getElementById('main'))
