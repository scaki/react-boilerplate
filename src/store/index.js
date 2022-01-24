import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;