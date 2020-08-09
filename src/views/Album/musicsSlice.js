import { createSlice } from "@reduxjs/toolkit";
import data from "../../app/data";

export const musicsSlice = createSlice({
  name: "musics",
  initialState: {
    list: data,
    selectedMusic: data[0],
    selectedIndex: 0,
    shuffle: false,
    repeat: false,
    playing: false,
  },
  reducers: {
    previusMusic: (state) => {
      const newIndex = state.selectedIndex - 1;
      if (newIndex >= 0) {
        state.selectedIndex = newIndex;
        state.selectedMusic = state.list[newIndex];
      } else {
        const lastIndex = state.list.length - 1;
        state.selectedIndex = lastIndex;
        state.selectedMusic = state.list[lastIndex];
      }
    },

    nextMusic: (state) => {
      const newIndex = state.selectedIndex + 1;
      if (newIndex <= state.list.length - 1) {
        state.selectedIndex = newIndex;
        state.selectedMusic = state.list[newIndex];
      } else {
        state.selectedIndex = 0;
        state.selectedMusic = state.list[0];
      }
    },

    selectMusic: (state, action) => {
      state.selectedIndex = action.payload;
      state.selectedMusic = state.list[action.payload];
    },

    changeModeRepeat: (state) => {
      state.repeat = !state.repeat;
    },

    changeModeShuffle: (state) => {
      state.shuffle = !state.shuffle;
    },
    togglePlayMusic: (state) => {
      state.playing = !state.playing;
    },
  },
});

export const {
  selectMusic,
  changeModeRepeat,
  changeModeShuffle,
  previusMusic,
  nextMusic,
  togglePlayMusic,
} = musicsSlice.actions;

export const actuallyList = (state) => {
  return state.album;
};

export default musicsSlice.reducer;
