const livePercentage = 0.35

const generateRandomPopulation = (size) => {
  const population = []

  for (let i = 0; i < size; i++) {
    const row = []

    for (let j = 0; j < size; j++) {
      const isAlive = Math.random() < livePercentage
      row.push({
        health: isAlive ? 'alive' : 'dead',
        age: isAlive ? 1 : 0
      })
    }

    population.push(row)
  }

  return population
}

const getRandom = ({ params: { gridSize } }, res) => {
  if (gridSize < 5 || gridSize > 30) {
    res.status(400).send('grid size must be between 5 and 30')
    return
  }

  const population = generateRandomPopulation(gridSize)
  res.json(population)
}

module.exports = getRandom
