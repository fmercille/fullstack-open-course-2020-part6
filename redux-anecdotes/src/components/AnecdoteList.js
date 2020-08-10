import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) => {
    if(state.filter) {
      return state.anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    } else {
      return state.anecdotes
    }
  })
  const dispatch = useDispatch()

  const voteAnecdote = (anecdote) => {
    dispatch(vote(anecdote))
    dispatch(setNotification(`You voted '${anecdote.content}'`, 10))
  }

  return (
    <>
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList