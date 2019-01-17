import React from 'react'
import { render } from 'react-dom'
import 'font-awesome/css/font-awesome.css'
import './styles/styles.scss'
import App from './components/App'

render(<App gridSize={10} />, document.getElementById('main'))
