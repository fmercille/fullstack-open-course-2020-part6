import deepFreeze from 'deep-freeze'
import filterReducer, { setFilter, clearFilter } from './filterReducer'

describe('filter reducer', () => {
  const initialState = null

  test('invalid action does nothing', () => {
    const action = {
      type: 'INVALID'
    }

    const newState = filterReducer(initialState, action)
    expect(newState).toBe(initialState)
  })

  test('setting filter returns proper state', () => {
    const state = 'Previous filter'
    const action = setFilter('This is a test')
    deepFreeze(state)
    const newState = filterReducer(state, action)
    expect(newState).toBe('This is a test')
  })

  test('clears the filter correctly', () => {
    const filter = 'Previous filter'
    const actionSet = setFilter(filter)
    const actionClear = clearFilter()
    const newState = filterReducer(null, actionSet)
    expect(newState).toBe(filter)
    const clearState = filterReducer(newState, actionClear)
    expect(clearState).toBe(null)
  })
})