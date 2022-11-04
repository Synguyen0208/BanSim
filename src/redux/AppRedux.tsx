import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    language: 'en',
    connectStatus: false,
  },
  reducers: {
    setLanguage: (state, {payload}) => {
      state.language = payload;
    },

    checkConnection: (state, {payload}) => {
      state.connectStatus = payload;
    },
  },
});

export const {reducer, actions} = appSlice;
export default reducer;
