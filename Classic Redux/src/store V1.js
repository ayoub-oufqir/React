import { combineReducers, createStore } from "redux";


// =====> initial states <======
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// =====> Reducer <======
function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: action.payload,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan.amount,
      };
    default:
      return state;
  }
}

// =====> Combine reducers <======
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// =====> create Store <======
const store = createStore(rootReducer);

// =====> action creators <======
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}
function payLoan() {
  return {
    type: "account/payLoan",
  };
}

// =====> dispatching actions <======
store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(300));
console.log(store.getState());
store.dispatch(requestLoan(300, "nothing lol"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

// =====================================================================

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

store.dispatch(createCustomer("Ayoub", "12536"));

console.log(store.getState())
