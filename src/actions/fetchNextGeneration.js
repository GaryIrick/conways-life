import 'cross-fetch/polyfill'

// Here we return a thunk.
const fetchNextGeneration = (population) => {
  return (dispatch) => {
    fetch(`http://localhost:5001/api/next`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(population)
    })
      .then(response => response.json())
      .then(json => dispatch({
        type: 'FETCHED_NEXT_GENERATION',
        population: json
      }))
  }
}

export default fetchNextGeneration
