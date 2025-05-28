// filepath: c:\Users\asus\Desktop\url-shortner\Frontend\src\store.js
import { configureStore } from '@reduxjs/toolkit';
// import your reducers here
import userReducer from './slice/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});