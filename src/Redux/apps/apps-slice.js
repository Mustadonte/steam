import { createSlice } from '@reduxjs/toolkit';
import { fetchGames } from './apps-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const appsReducer = createSlice({
  name: 'apps',
  initialState,
  extraReducers: {
    [fetchGames.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchGames.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchGames.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default appsReducer.reducer;
