const getNextGeneration = require('../lib/getNextGeneration')

const getNext = ({ body }, res) => {
  res.json(getNextGeneration(body))
}

module.exports = getNext
