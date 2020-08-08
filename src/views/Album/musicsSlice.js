import { createSlice } from "@reduxjs/toolkit";
import data from "../../app/data";

export const musicsSlice = createSlice({
  name: "musics",
  initialState: {
    list: data,
    selectedMusic: data[0],
    selectedIndex: 0,
  },
  reducers: {
    increment: (state, b) => {
      state.selectedIndex += 1;
      if (!data[state.selectedIndex]) {
        state.selectedMusic = data[0];
      } else state.selectedMusic = data[state.selectedIndex];
    },
    decrement: (state) => {
      // state.list -= 1;
    },
    navigateTo: (state, action) => {
      state.selectedIndex = action.payload;
      state.selectedMusic = data[action.payload];
      console.log(data[action.payload], "no kurwa co js");
    },
  },
});

export const { increment, decrement, navigateTo } = musicsSlice.actions;

export const actuallyList = (state) => {
  return state.album;
};

export default musicsSlice.reducer;
