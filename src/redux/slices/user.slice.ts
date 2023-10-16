import { User } from 'firebase/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: User | null = null;

export const userSlice = createSlice({
  /* Redux Toolkit allows param reasign since it uses the Immer library */
  /* eslint-disable no-param-reassign, @typescript-eslint/no-unused-vars */
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      state = null;
    },
    setUser: (state, action: PayloadAction<typeof initialState>) => {
      state = action.payload;
    },
  },
  /* eslint-enable no-param-reassign, @typescript-eslint/no-unused-vars */
});

// Selectors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUser = (state: any) => state.user;

// Reducers and actions
export const { setUser, resetUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
