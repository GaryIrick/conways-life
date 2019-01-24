export default (size) => {
  const population = []
  for (let i = 0; i < size; i++) {
    const row = []
    for (let j = 0; j < size; j++) {
      row.push({ health: 'alive', age: 1 })
    }
    population.push(row)
  }

  return population
}
