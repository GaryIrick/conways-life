const fetchNewPopulation = (size) => {
  return fetch(`http://localhost:5001/api/random/${size}`)
    .then(response => response.json())
    .then(json => ({
      type: 'FETCHED_NEW_POPULATION',
      population: json
    }))
}

export default fetchNewPopulation
