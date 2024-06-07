import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const orderDetails = createSlice({
  name: 'orderDetails',
  initialState,
  reducers: {
    adding: (state, action) => {
      state.push(action.payload);
    },
    removing: (state) => {
      state.length = 0; // This clears the array
    },
  }
});

export const { adding, removing } = orderDetails.actions;
export default orderDetails.reducer;
