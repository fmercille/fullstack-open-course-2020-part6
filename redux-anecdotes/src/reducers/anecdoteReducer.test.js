import deepFreeze from 'deep-freeze'
import anecdoteReducer, { vote } from './anecdoteReducer'

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
    const action = {
      type: 'VOTE',
      anecdote: 2
    }

    const state = initialState

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    expect(newState).toEqual([
      { id: 1, votes: 3, content: 'If it hurts, do it more often' },
      { id: 2, votes: 9, content: 'Adding manpower to a late software project makes it later!' },
      { id: 3, votes: 2, content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.' },
      { id: 4, votes: 1, content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' },
      { id: 5, votes: 9, content: 'Premature optimization is the root of all evil.' },
      { id: 6, votes: 6, content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.' }
    ])
  })

  test('vote action creator returns proper object', () => {
    const action = {
      type: 'VOTE',
      anecdote: 2
    }

    const createdAction = vote(2)
    expect(createdAction).toEqual(action)
  })
})