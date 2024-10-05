import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
    },
    remove: (state, action) => {
      const removeItem = state.data.filter(
        (product) => product.id !== action.payload
      );
      state.data = removeItem;
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const { add, remove } = cartSlice.actions;