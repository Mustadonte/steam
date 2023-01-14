import { configureStore } from '@reduxjs/toolkit';
import appReducer from './apps/apps-slice';
import sortReducer from './sort/sort-slice';

export const store = configureStore({
  reducer: {
    apps: appReducer,
    sort: sortReducer,
  },
});
