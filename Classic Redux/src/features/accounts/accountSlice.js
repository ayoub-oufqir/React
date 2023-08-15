
// Initial State
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// REDUCER
export default function accountReducer(
  state = initialStateAccount,
  action
) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading:false,
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
        loan: action.payload.amount,
        purpose: action.payload.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan.amount,
      };
    case "account/convertingCurrency":
      return {
        ...state,
        isLoading:true,
      };
    default:
      return state;
  }
}

// Action Creators
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  // API call using Redux Thunk
  return async function (dispatch, getState) {
    // this just sets isLoading to true
    dispatch({type:"account/convertingCurrency"});
    
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
    const data = await res.json();
    const converted = data.rates.USD;

    // dispatch action
    dispatch({ type: "account/deposit", payload: converted });
  };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}
export function payLoan() {
  return {
    type: "account/payLoan",
  };
}
