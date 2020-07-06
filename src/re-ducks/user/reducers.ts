
import { ActionTypes } from './constants';
import { User, UserActionTypes } from './types';

const initialState: User = {
  currentUser: ''
}

export const userReducer = (state=initialState,action: UserActionTypes) => {
  switch (action.type) {
    case ActionTypes.setUser:
    return action.payload.currentUser
    case ActionTypes.clearUser:
    return initialState
    default:
    return state
  }
}
