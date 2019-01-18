const fs = require('fs')
const express = require('express')
const app = express()
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')

// E_NOTIMPL:  Is the order of these app.use() calls important?
app.use(express.json())

app.use('/api', require('./api'))

const compiler = webpack(require('./webpack.config'))

app.use(devMiddleware(compiler, {
  stats: {
    colors: true
  },
  noInfo: true
}))

app.use(hotMiddleware(compiler, { path: '/__webpack_hmr' }))

const html = fs.readFileSync('index.html', { encoding: 'utf8' })

app.get('/:gridSize?', (req, res) => res.send(html))

const port = parseInt(process.env.PORT, 10) || 5001

app.listen(port, () => console.log(`running: http://localhost:${port}`))
