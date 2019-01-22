import generateRandomPopulation from '../../lib/generateRandomPopulation'

describe('generateRandomPopulation', () => {
  it('random population', () => {
    const pop = generateRandomPopulation(15)

    expect(pop.length).toBe(15)

    pop.forEach(row => {
      expect(row.length).toBe(15)

      row.forEach(cell => {
        // It's a little weird to have a unit test with randomness
        // in it, since we don't know which value to expect for
        // any cell.
        expect(['alive', 'dead']).toContain(cell.health)

        if (cell.health === 'alive') {
          expect(cell.age).toBe(1)
        } else {
          expect(cell.age).toBe(0)
        }
      })
    })
  })
})
