const path = require('path')

const rules = (() => {
  const result = [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.scss/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]

  const resources = {
    eot: 'vnd.ms-fontobject',
    ttf: 'application/font-sfnt',
    woff: 'application/font-woff',
    woff2: 'application/font-woff2',
    svg: 'image/svg+xml',
    jpg: 'image/jpg',
    png: 'image/png',
    gif: 'image/gif'
  }

  // anything smaller than 50K will be embedded as url(data:...)
  // larger files will be emitted
  const addUrlLoader = (extension, mimeType) => {
    result.push({
      test: new RegExp(`\\.${extension}$`, 'i'),
      use: {
        loader: 'url-loader',
        options: {
          mimetype: mimeType,
          limit: 50000,
          name: '[name].[ext]'
        }
      }
    })
  }

  for (let extension in resources) {
    addUrlLoader(extension, resources[extension])
  }

  return result
})()

const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: { rules },
  devtool: 'source-map'
}
