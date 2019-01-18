import fetchNewPopulation from './fetchNewPopulation'

const makeBigger = () => {
  return (dispatch, getState) => {
    const size = getState().population.length

    if (size < 30) {
      return dispatch(fetchNewPopulation(size + 1))
    }
  }
}

export default makeBigger
