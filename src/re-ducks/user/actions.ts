import { ActionTypes } from './constants';

export const setUser = (user: string) => {
  return {
    type: ActionTypes.setUser,
    payload: {
      currentUser: user,
    },
  };
};
