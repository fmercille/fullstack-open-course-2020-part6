const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFICATION.SET':
      return action.notification
    case 'NOTIFICATION.CLEAR':
      return null
    default:
      return state
  }
}

const setNotification = (message) => {
  return {
    type: 'NOTIFICATION.SET',
    notification: message
  }
}

const clearNotification = () => {
  return {
    type: 'NOTIFICATION.CLEAR'
  }
}

export default reducer

export {
  setNotification,
  clearNotification
}