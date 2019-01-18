import fetchNewPopulation from './fetchNewPopulation'

const makeSmaller = () => {
  return (dispatch, getState) => {
    const size = getState().population.length

    if (size > 5) {
      return dispatch(fetchNewPopulation(size - 1))
    }
  }
}

export default makeSmaller
