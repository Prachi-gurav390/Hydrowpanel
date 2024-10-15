// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';


const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = jwtDecode(action.payload.token);
      // Store token in localStorage
      localStorage.setItem('token', action.payload.token);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
      // Remove token from localStorage
      localStorage.removeItem('token');
    },
    loadUser(state) {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          // Check token expiration
          const currentTime = Date.now() / 1000;
          if (decoded.exp < currentTime) {
            // Token expired
            state.isLoggedIn = false;
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
          } else {
            state.isLoggedIn = true;
            state.token = token;
            state.user = decoded;
          }
        } catch (err) {
          state.isLoggedIn = false;
          state.token = null;
          state.user = null;
          localStorage.removeItem('token');
        }
      }
    },
  },
});

export const { loginSuccess, logout, loadUser } = authSlice.actions;
export default authSlice.reducer;
