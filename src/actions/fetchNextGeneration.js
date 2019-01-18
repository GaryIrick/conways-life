const receiveData = (population) => ({
  type: 'FETCHED_NEXT_GENERATION',
  population
})

const fetchNextGeneration = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const response = await fetch(`http://localhost:5001/api/next`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state.population)
    })
    const json = await response.json()

    return dispatch(receiveData(json))
  }
}

export default fetchNextGeneration
