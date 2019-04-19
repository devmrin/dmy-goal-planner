import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import baseReducer from "ducks";

const middlewares = [];

// appReducer
const appReducer = combineReducers({
  base: baseReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
