import { configureStore } from '@reduxjs/toolkit';
import appReducer from './apps-slice';

export const store = configureStore({
  reducer: {
    apps: appReducer,
  },
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});
