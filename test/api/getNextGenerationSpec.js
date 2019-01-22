import getNextGeneration from '../../lib/getNextGeneration'

const getPopulation = (cells) => {
  const population = []

  cells.forEach(row => {
    const newRow = []
    population.push(newRow)

    row.forEach(cell => {
      if (cell === 1) {
        newRow.push({
          health: 'alive',
          age: 1
        })
      } else {
        newRow.push({
          health: 'dead',
          age: 0
        })
      }
    })
  })

  return population
}

// This isn't an exhaustive set of unit tests, we are missing:
// - Test of neighbors in all 8 directions
// - Test of neighbors at the edge of the world.
//
// For this code, I'm more concerned with the mechanics of the
// tests, not the actual coverage.

describe('getNextGeneration', () => {
  it('death with 0 neighbors', () => {
    const oldPop = getPopulation([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ])

    const newPop = getNextGeneration(oldPop)
    expect(newPop[1][1].health).toBe('dead')
  })

  it('death with 1 neighbor', () => {
    const oldPop = getPopulation([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ])

    const newPop = getNextGeneration(oldPop)
    expect(newPop[1][1].health).toBe('dead')
  })

  it('survive with 2 neighbors', () => {
    const oldPop = getPopulation([
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 0]
    ])

    const newPop = getNextGeneration(oldPop)
    expect(newPop[1][1].health).toBe('alive')
  })

  it('survive with 3 neighbors', () => {
    const oldPop = getPopulation([
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ])

    const newPop = getNextGeneration(oldPop)
    expect(newPop[1][1].health).toBe('alive')
  })

  it('death with 4 neighbors', () => {
    const oldPop = getPopulation([
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ])

    const newPop = getNextGeneration(oldPop)
    expect(newPop[1][1].health).toBe('dead')
  })

  it('death with 5 neighbors', () => {
    const oldPop = getPopulation([
      [1, 1, 1],
      [1, 1, 1],
      [0, 0, 0]
    ])

    const newPop = getNextGeneration(oldPop)
    expect(newPop[1][1].health).toBe('dead')
  })

  it('death with 6 neighbors', () => {
    const oldPop = getPopulation([
      [1, 1, 1],
      [1, 1, 1],
      [1, 0, 0]
    ])

    const newPop = getNextGeneration(oldPop)
    expect(newPop[1][1].health).toBe('dead')
  })

  it('death with 7 neighbors', () => {
    const oldPop = getPopulation([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ])

    const newPop = getNextGeneration(oldPop)
    expect(newPop[1][1].health).toBe('dead')
  })

  it('death with 8 neighbors', () => {
    const oldPop = getPopulation([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ])

    const newPop = getNextGeneration(oldPop)
    expect(newPop[1][1].health).toBe('dead')
  })

  it('birth with 3 neighbors', () => {
    const oldPop = getPopulation([
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0]
    ])

    const newPop = getNextGeneration(oldPop)
    expect(newPop[1][1].health).toBe('alive')
  })
})
