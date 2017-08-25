export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: state.friends.concat(action.friend)}
    case 'REMOVE_FRIEND':
      return {...state, friends: state.friends.filter((friend)=>{ return friend.id !== action.id })
      }
    default:
      return state
  }
}
