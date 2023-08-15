import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// Slice
const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return { payload: { fullName, nationalID, createdAt: new Date().toISOString() } };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

// Exporting action creators and reducer
export const { updateName, createCustomer } = customerSlice.actions;
export default customerSlice.reducer;

