import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TypeUser = {
  displayName: string | null;
  email: string | null;
  uid: string;
};

export const NullUser: TypeUser = {
  displayName: null,
  email: null,
  uid: '',
};

const initialState: TypeUser = NullUser;

export const userSlice = createSlice({
  /* Redux Toolkit allows param reasign since it uses the Immer library */
  /* eslint-disable no-param-reassign */
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.displayName = NullUser.displayName;
      state.email = NullUser.email;
      state.uid = NullUser.uid;
    },
    setUser: (state: TypeUser, action: PayloadAction<TypeUser>) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
  },
  /* eslint-enable no-param-reassign */
});

// Selectors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUser = (state: any) => state.user;

// Reducers and actions
export const { setUser, resetUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
