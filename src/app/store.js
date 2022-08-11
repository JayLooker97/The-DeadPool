import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { aboutReducer } from '../features/about/aboutSlice';

export const store = configureStore({
  reducer: {
    deadpools: aboutReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});