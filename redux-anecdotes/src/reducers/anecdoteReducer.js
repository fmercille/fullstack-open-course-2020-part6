import anecdoteService from '../services/anecdotes'

const sorter = (a, b) => a.votes > b.votes ? -1 : (a.votes < b.votes ? 1 : 0)

const reducer = (state = [], action) => {
  let newState = state

  switch (action.type) {
    case 'ANECDOTE.VOTE':
      newState = state.map((anecdote) => anecdote.id === action.anecdote ? {...anecdote, votes: anecdote.votes + 1} : anecdote)
      break
    case 'ANECDOTE.CREATE':
      newState = [...state, action.data]
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

const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ANECDOTE.CREATE',
      data: newAnecdote
    })
  }
}

const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'ANECDOTE.INIT',
      data: anecdotes
    })
  }
}

export default reducer

export {
  vote,
  createAnecdote,
  initializeAnecdotes
}