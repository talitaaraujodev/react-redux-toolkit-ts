import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  email: string;
}
export interface UserState {
  currentUser: User | null;
}

const initialState: UserState = { currentUser: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
