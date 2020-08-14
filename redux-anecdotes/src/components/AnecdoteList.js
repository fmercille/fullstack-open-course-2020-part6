import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

const AnecdoteList = (props) => {
  const voteAnecdote = (anecdote) => {
    props.vote(anecdote)
    props.setNotification(`You voted '${anecdote.content}'`, 5)
  }

  return (
    <>
      <Filter />
      {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
  if ( !state.filter ) {
    return {
      anecdotes: state.anecdotes
    }
  } else {
    return {
      anecdotes: state.anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    }
  }
}

const mapDispatchToProps = {
  vote,
  setNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList
