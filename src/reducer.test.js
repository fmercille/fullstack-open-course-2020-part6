import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('state is stored properly', () => {
    const state = initialState
    const actions = ['GOOD', 'OK', 'GOOD', 'GOOD', 'BAD', 'OK', 'GOOD', 'BAD', 'OK', 'GOOD', 'OK']

    deepFreeze(state)
    const newState = actions.reduce((state, action) => counterReducer(state, {type: action}), state)

    expect(newState).toEqual({
      good: 5,
      ok: 4,
      bad: 2
    })
  })
})