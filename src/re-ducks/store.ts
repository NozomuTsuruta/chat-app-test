import { combineReducers, createStore } from 'redux';
import { userReducer } from './user/reducers';

const RootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer);

export default store;
