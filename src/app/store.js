import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "../views/Album/musicsSlice";

export default configureStore({
  reducer: {
    album: albumReducer,
  },
});
