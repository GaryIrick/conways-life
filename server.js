const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.json())

app.use('/api', require('./api'))

if (process.env.NODE_ENV !== 'production') {
  console.log('using dev configuration')
  require('./dev')(app)
}

app.use('/', express.static('public'))

const html = fs.readFileSync('index.html', { encoding: 'utf8' })

app.get('/[0-9]+', (req, res) => res.send(html))

const port = parseInt(process.env.PORT, 10) || 5001

app.listen(port, () => console.log(`running: http://localhost:${port}`))
