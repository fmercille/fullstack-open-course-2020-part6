const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const sorter = (a, b) => a.votes > b.votes ? -1 : (a.votes < b.votes ? 1 : 0)

const initialState = anecdotesAtStart.map(asObject).sort(sorter)

const reducer = (state = initialState, action) => {
  let newState = state

  switch (action.type) {
    case 'VOTE':
      newState = state.map((anecdote) => anecdote.id === action.anecdote ? {...anecdote, votes: anecdote.votes + 1} : anecdote)
      break
    case 'CREATE':
      newState = [...state, asObject(action.anecdote)]
      break
    default:
      break
  }

  return newState.sort(sorter)
}

const vote = (anecdote) => {
  return {
    type: 'VOTE',
    anecdote: anecdote
  }
}

const createAnecdote = (anecdote) => {
  return {
    type: 'CREATE',
    anecdote: anecdote
  }
}

export default reducer

export {
  vote,
  createAnecdote
}