const express = require('express')

const router = express.Router()

router.get('/random/:gridSize', require('./getRandomPopulation'))
router.post('/next', require('./getNextGeneration'))

module.exports = router
