const makeBigger = (history) => {
  return (dispatch, getState) => {
    const size = getState().population.length

    // E_NOTIMPL: This action has a side effect, does this belong here
    // or somewhere else?
    if (size < 30) {
      history.push(`/${size + 1}`)
    }
  }
}

export default makeBigger
