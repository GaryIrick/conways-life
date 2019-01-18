const receiveData = (population) => ({
  type: 'FETCHED_NEW_POPULATION',
  population
})

const fetchNewPopulation = (size) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:5001/api/random/${size}`)
    const json = await response.json()

    return dispatch(receiveData(json))
  }
}

export default fetchNewPopulation
