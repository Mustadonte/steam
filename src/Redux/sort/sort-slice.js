import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: 'ascending',
  sortBy: 'price',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    order: (state, action) => {
      state.order = action.payload;
    },
    sortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { order, sortBy } = sortSlice.actions;

export default sortSlice.reducer;
