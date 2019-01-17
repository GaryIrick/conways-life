const generation = (state = 1, action) => {
  switch (action.type) {
    case 'SET_SIZE':
      // When we change the size, we start off at generation 1.
      return 1

    case 'NEXT_GENERATION':
      return state + 1

    default:
      return state
  }
}

export default generation
