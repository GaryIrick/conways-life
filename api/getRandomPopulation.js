const generateRandomPopulation = require('../lib/generateRandomPopulation')

// E_NOTIMPL: Can we enforce these limits with OpenAPI?
const getRandom = ({ params: { gridSize } }, res) => {
  if (gridSize < 5 || gridSize > 30) {
    res.status(400).send('grid size must be between 5 and 30')
    return
  }

  const population = generateRandomPopulation(gridSize)
  res.json(population)
}

module.exports = getRandom
