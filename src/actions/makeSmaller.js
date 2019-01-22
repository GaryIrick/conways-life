const makeSmaller = (history) => {
  return (dispatch, getState) => {
    const size = getState().population.length

    if (size > 5) {
      history.push(`/${size - 1}`)
    }
  }
}

export default makeSmaller
