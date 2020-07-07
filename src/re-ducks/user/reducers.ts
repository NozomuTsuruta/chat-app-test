import { ActionTypes } from './constants';
import { User, UserActionTypes } from './types';

const initialState: User = {
  currentUser: '',
};

export const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case ActionTypes.setUser:
      return { currentUser: action.payload.currentUser };
    default:
      return state;
  }
};
