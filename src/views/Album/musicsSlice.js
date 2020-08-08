import { createSlice } from "@reduxjs/toolkit";
import data from "../../app/data";

export const musicsSlice = createSlice({
  name: "musics",
  initialState: {
    list: data,
    selectedMusic: data[0],
  },
  reducers: {
    increment: (state) => {
      state.list += 1;
    },
    decrement: (state) => {
      state.list -= 1;
    },
    incrementByAmount: (state, action) => {
      state.list += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = musicsSlice.actions;

export const actuallyList = (state) => {
  return state.album;
};

export default musicsSlice.reducer;
