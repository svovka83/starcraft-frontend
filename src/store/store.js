import { configureStore } from "@reduxjs/toolkit";
import { reducerPlayerOne } from "./playerOneSlice";

export const store = configureStore({
  reducer: {
    playerOne: reducerPlayerOne,
  },
});
