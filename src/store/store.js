import { configureStore } from "@reduxjs/toolkit";
import { reducerGame } from "./gameSlice";

export const store = configureStore({
  reducer: {
    game: reducerGame,
  },
});
