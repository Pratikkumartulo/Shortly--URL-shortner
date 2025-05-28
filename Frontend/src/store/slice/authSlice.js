
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedin:false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedin = true
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedin = false
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;