import deepFreeze from 'deep-freeze'
import anecdoteReducer, { vote, createAnecdote } from './anecdoteReducer'

describe('redux-anecdotes reducer', () => {
  const initialState = [
    { id: 1, votes: 3, content: 'If it hurts, do it more often' },
    { id: 2, votes: 8, content: 'Adding manpower to a late software project makes it later!' },
    { id: 3, votes: 2, content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.' },
    { id: 4, votes: 1, content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' },
    { id: 5, votes: 9, content: 'Premature optimization is the root of all evil.' },
    { id: 6, votes: 6, content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.' }
  ]

  test('invalid action does nothing', () => {
    const action = {
      type: 'INVALID'
    }

    const newState = anecdoteReducer(initialState, action)
    expect(newState).toBe(initialState)
  })

  test('vote action increments vote count', () => {
    const id = 2
    const action = vote(id)
    const state = initialState

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    expect(newState.find((anecdote) => anecdote.id === id).votes).toBe(initialState.find((anecdote) => anecdote.id === id).votes + 1)
  })

  test('create new anecdote returns proper state', () => {
    const action = createAnecdote({
      content: "This is a test",
      votes: 0,
      id: "csL9X5w"
    })
    const state = initialState

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    expect(newState).toHaveLength(initialState.length + 1)
    expect(newState[initialState.length].content).toBe('This is a test')
    expect(newState[initialState.length].votes).toBe(0)
  })

  test('anecdotes are returned ordered by votes', () => {
    const id = 1
    const action = vote(id)
    const state = initialState

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    expect(newState.map((anecdote) => anecdote.id)).toEqual([5, 2, 6, 1, 3, 4])
  })
})