const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const sorter = (a, b) => a.votes > b.votes ? -1 : (a.votes < b.votes ? 1 : 0)

const reducer = (state = [], action) => {
  let newState = state

  switch (action.type) {
    case 'ANECDOTE.VOTE':
      newState = state.map((anecdote) => anecdote.id === action.anecdote ? {...anecdote, votes: anecdote.votes + 1} : anecdote)
      break
    case 'ANECDOTE.CREATE':
      newState = [...state, asObject(action.anecdote)]
      break
    case 'ANECDOTE.INIT':
      newState = action.data
      break
    default:
      break
  }

  return newState.sort(sorter)
}

const vote = (anecdote) => {
  return {
    type: 'ANECDOTE.VOTE',
    anecdote: anecdote
  }
}

const createAnecdote = (anecdote) => {
  return {
    type: 'ANECDOTE.CREATE',
    anecdote: anecdote
  }
}

const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'ANECDOTE.INIT',
    data: anecdotes
  }
}

export default reducer

export {
  vote,
  createAnecdote,
  initializeAnecdotes
}