const generation = (state = 1, action) => {
  switch (action.type) {
    case 'MAKE_BIGGER':
    case 'MAKE_SMALLER':
      // When we change the size, we start off with a new population
      // at generation 1
      return 1

    case 'NEXT_GENERATION':
      return state + 1

    default:
      return state
  }
}

export default generation
