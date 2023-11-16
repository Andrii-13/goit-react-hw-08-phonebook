import { createNewUser } from './auth-operations';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, password: null },
    token:null,
    isLogenIn: null,
  },
  extraReducers: builder => {
    builder
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })},
});

export const authReducer = authSlice.reducer;