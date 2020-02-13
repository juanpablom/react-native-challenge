import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

function getMiddlewares() {
  const middlewares: any[] = [thunk];
  return middlewares;
}

export const store = createStore(rootReducer, applyMiddleware(...getMiddlewares()));

export type Store = ReturnType<typeof rootReducer>;
