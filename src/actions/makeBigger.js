const makeBigger = () => {
  return (dispatch, getState) => {
    const size = getState().population.length

    if (size < 30) {
      // E_NOTIMPL: This reloads the page, I think we can do a better job with react-router, but
      // I'm not sure how.
      window.location = `${size + 1}`
    }
  }
}

export default makeBigger
