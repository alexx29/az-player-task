import { createSlice } from "@reduxjs/toolkit";
import data from "../../app/data";
import getRandomInt from "../../helpers/getRandomInt";

export const musicsSlice = createSlice({
  name: "musics",
  initialState: {
    list: data,
    selectedMusic: data[0],
    selectedIndex: 0,
    random: false,
    infinity: false,
  },
  reducers: {
    previusMusic: (state) => {
      if (state.random) {
        const randomMusic = getRandomInt(state.list.length);
        state.selectedIndex = randomMusic;
        state.selectedMusic = state.list[randomMusic];
      } else {
        const newIndex = state.selectedIndex - 1;
        if (state.list[newIndex]) {
          state.selectedIndex = newIndex;
          state.selectedMusic = state.list[newIndex];
        } else {
          const lastIndex = state.list.length - 1;
          state.selectedIndex = lastIndex;
          state.selectedMusic = state.list[lastIndex];
        }
      }
    },
    nextMusic: (state) => {
      if (state.random) {
        const randomMusic = getRandomInt(state.list.length);
        state.selectedIndex = randomMusic;
        state.selectedMusic = state.list[randomMusic];
      } else {
        const newIndex = state.selectedIndex + 1;

        if (state.list[newIndex]) {
          state.selectedIndex = newIndex;
          state.selectedMusic = state.list[newIndex];
        } else {
          state.selectedIndex = 0;
          state.selectedMusic = state.list[0];
        }
      }
    },

    selectMusic: (state, action) => {
      state.selectedIndex = action.payload;
      state.selectedMusic = state.list[action.payload];
    },

    changeModeInfinitty: (state) => {
      state.infinity = !state.infinity;
    },

    changeModeRandom: (state) => {
      state.random = !state.random;
    },
  },
});

export const {
  selectMusic,
  changeModeInfinitty,
  changeModeRandom,
  previusMusic,
  nextMusic,
} = musicsSlice.actions;

export const actuallyList = (state) => {
  return state.album;
};

export default musicsSlice.reducer;
