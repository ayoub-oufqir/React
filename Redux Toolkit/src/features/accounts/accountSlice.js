import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading:false,
};

// Slice
const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.balance += action.payload.amount;
        state.loan += action.payload.amount;
        state.loanPurpose = action.payload.purpose;
      },
    },
    payLoan(state) {
      if (state.loan === 0) return;
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      if (state.loan === 0) return;
      state.isLoading = true;
    },
  },
});

// Old function that we used in classic Redux code to intoduce Redux Thunk
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  // API call
  return async function (dispatch, getState) {
    // this just sets isLoading to true
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    // dispatch action
    dispatch({ type: "account/deposit", payload: converted });
  };
}

// Exporting action creators and reducer
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
