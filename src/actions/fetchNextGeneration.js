const fetchNextGeneration = (population) => {
  return fetch(`http://localhost:5001/api/next`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(population)
  })
    .then(response => response.json())
    .then(json => ({
      type: 'FETCHED_NEXT_GENERATION',
      population: json
    }))
}

export default fetchNextGeneration
