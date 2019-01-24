const makeBigger = (history) => {
  return (dispatch, getState) => {
    const size = getState().population.length

    if (size < 30) {
      history.push(`/${size + 1}`)
    }
  }
}

export default makeBigger
