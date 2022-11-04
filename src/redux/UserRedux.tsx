import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, {payload}) => {
      state.user = payload;
    },
  },
});

export const {reducer, actions} = userSlice;
export default reducer;
