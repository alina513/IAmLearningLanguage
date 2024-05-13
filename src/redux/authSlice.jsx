import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  userId: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToken: (state, action) => {
      const { email, accessToken, uid } = action.payload;
      state.email = email;
      state.token = accessToken;
      state.userId = uid;
      state.isLoggedIn = true;
    },
    deleteToken: state => {
      state.email = null;
      state.token = null;
      state.userId = null;
      state.isLoggedIn = false;
    },
  },
});

export const { addToken, deleteToken } = authSlice.actions;
export const authReducer = authSlice.reducer;

