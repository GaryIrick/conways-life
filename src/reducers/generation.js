const generation = (state = 1, action) => {
  switch (action.type) {
    case 'FETCHED_NEW_POPULATION':
      return 1

    case 'FETCHED_NEXT_GENERATION':
      return state + 1

    default:
      return state
  }
}

export default generation
