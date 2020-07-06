import { Action } from "redux";
import { ActionTypes } from "./constants";


export type User = {
  currentUser: string
}

interface SetUserAction extends Action {
  type: typeof ActionTypes.setUser;
  payload: User;
}

interface ClearUserAction extends Action {
  type: typeof ActionTypes.clearUser;
}

export type UserActionTypes = SetUserAction|ClearUserAction
