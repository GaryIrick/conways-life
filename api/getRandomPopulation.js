const generateRandomPopulation = require('../lib/generateRandomPopulation')

// We would probably enforce the 5 <= x <= 30 rule somewhere else,
// either with OpenAPI in this project or in a gateway in front
// of this server.
const getRandom = ({ params: { gridSize } }, res) => {
  if (gridSize < 5 || gridSize > 30) {
    res.status(400).send('grid size must be between 5 and 30')
    return
  }

  const population = generateRandomPopulation(gridSize)
  res.json(population)
}

module.exports = getRandom
