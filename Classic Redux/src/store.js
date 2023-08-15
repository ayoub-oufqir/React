import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import reducers
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// combine reducers into one root reducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// crreate store, add Redux Thunk middleware and Redux DevTools to it
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

