const isNeighborAlive = (population, rowIndex, columnIndex, rowOffset, columnOffset) => {
  const neighborRowIndex = rowIndex + rowOffset
  const neighborColumnIndex = columnIndex + columnOffset

  // If you are on the edge of the world, any neighbors that would be off
  // the edge are considered to be dead.
  if (neighborRowIndex < 0 || neighborColumnIndex < 0) {
    return 0
  }

  if (neighborRowIndex >= population.length) {
    return 0
  }

  if (neighborColumnIndex >= population[neighborRowIndex].length) {
    return 0
  }

  const neighbor = population[neighborRowIndex][neighborColumnIndex]

  return neighbor.health === 'alive' ? 1 : 0
}

const ageCell = (population, rowIndex, columnIndex) => {
  const cell = population[rowIndex][columnIndex]

  let neighbors = 0
  neighbors += isNeighborAlive(population, rowIndex, columnIndex, -1, -1) ? 1 : 0
  neighbors += isNeighborAlive(population, rowIndex, columnIndex, -1, 0) ? 1 : 0
  neighbors += isNeighborAlive(population, rowIndex, columnIndex, -1, 1) ? 1 : 0
  neighbors += isNeighborAlive(population, rowIndex, columnIndex, 0, -1) ? 1 : 0
  neighbors += isNeighborAlive(population, rowIndex, columnIndex, 0, 1) ? 1 : 0
  neighbors += isNeighborAlive(population, rowIndex, columnIndex, 1, -1) ? 1 : 0
  neighbors += isNeighborAlive(population, rowIndex, columnIndex, 1, 0) ? 1 : 0
  neighbors += isNeighborAlive(population, rowIndex, columnIndex, 1, 1) ? 1 : 0

  if (neighbors === 2 || neighbors === 3) {
    return {
      health: 'alive',
      age: cell.health === 'alive' ? cell.age + 1 : 1
    }
  } else {
    return {
      health: 'dead',
      age: 0
    }
  }
}

const ageRow = (population, rowIndex) => {
  return population[rowIndex].map((cell, columnIndex) => ageCell(population, rowIndex, columnIndex))
}

const getNextGeneration = (population) => {
  return population.map((row, rowIndex) => ageRow(population, rowIndex))
}

const getNext = ({ body }, res) => {
  res.json(getNextGeneration(body))
}

module.exports = getNext
