import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
// default state for ur application.

// middleware [thunk]

const middleware = [thunk];

const store = createStore(
  combineReducers,
  initialState,
  // middleware and redux devtools(for dev env)
  composeWithDevTools(applyMiddleware(...middleware)) //middleware spec
);

// to get the current state

let currentState = store.getState();

// subscribe listener
// getting the token (for private end points)

store.subscribe(() => {
  let previousState = currentState;
  // old /previous state
  currentState = store.getState();
  // recent one
  if (previousState.auth.token !== currentState.auth.token) {
    localStorage.setItem("token", currentState.auth.token);
  }

  // can we compare the date from two states?
  // based on that can we take a call to update the token?
});

export default store;
