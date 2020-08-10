import deepFreeze from 'deep-freeze'
import notificationReducer, { setNotification, clearNotification } from './notificationReducer'

describe('notification reducer', () => {
  const initialState = null

  test('invalid action does nothing', () => {
    const action = {
      type: 'INVALID'
    }

    const newState = notificationReducer(initialState, action)
    expect(newState).toBe(initialState)
  })

  test('setting notification returns proper state', () => {
    const state = 'Previous notification'
    const action = setNotification('This is a test')
    deepFreeze(state)
    const newState = notificationReducer(state, action)
    expect(newState).toBe('This is a test')
  })

  test('clears the notification correctly', () => {
    const notification = 'Previous notification'
    const actionSet = setNotification(notification)
    const actionClear = clearNotification()
    const newState = notificationReducer(null, actionSet)
    expect(newState).toBe(notification)
    const clearState = notificationReducer(newState, actionClear)
    expect(clearState).toBe(null)
  })
})