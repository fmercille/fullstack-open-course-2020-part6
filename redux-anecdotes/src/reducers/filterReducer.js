const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER.SET':
      return action.filter
    case 'FILTER.CLEAR':
      return null
    default:
      return state
  }
}

const setFilter = (filter) => {
  return {
    type: 'FILTER.SET',
    filter: filter
  }
}

const clearFilter = () => {
  return {
    type: 'FILTER.CLEAR'
  }
}

export default reducer

export {
  setFilter,
  clearFilter
}