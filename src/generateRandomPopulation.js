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

export default generateRandomPopulation
