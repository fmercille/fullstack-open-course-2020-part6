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

const setNotification = (message, duration = 5) => {
  return async dispatch => {
    dispatch({
      type: 'NOTIFICATION.SET',
      notification: message
    })
    
    setTimeout(() => dispatch(clearNotification()), duration * 1000)
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