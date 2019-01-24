const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')

module.exports = (app) => {
  const compiler = webpack(require('./webpack.config'))

  app.use(devMiddleware(compiler, {
    stats: {
      colors: true
    },
    noInfo: true
  }))

  app.use(hotMiddleware(compiler, { path: '/__webpack_hmr' }))
}
