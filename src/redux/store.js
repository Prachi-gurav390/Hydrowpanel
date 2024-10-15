// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationSlice';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    counter: counterReducer,
    auth: authReducer,
  },
});

