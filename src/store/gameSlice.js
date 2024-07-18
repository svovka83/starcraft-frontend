import { createSlice } from "@reduxjs/toolkit";

import { ZERG } from "../constants/zerg";

const initialState = {
  unitsPlayerOne: ZERG,
  armyPlayerOne: [],
  workersPlayerOne: [ZERG[0]],
  mineralsMinePlayerOne: 50,
  mineralsPlayerOne: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addUnitToArmy: (state, action) => {
      const newUnit = state.unitsPlayerOne.find(
        (el) => el.id === action.payload
      );
      return { ...state, armyPlayerOne: [...state.armyPlayerOne, newUnit] };
    },
    addWorker: (state) => {
      return {
        ...state,
        workersPlayerOne: [...state.workersPlayerOne, state.unitsPlayerOne[0]],
      };
    },
    addMinerals: (state) => {
      (state.mineralsMinePlayerOne -= state.workersPlayerOne.length);
      (state.mineralsPlayerOne += state.workersPlayerOne.length);
    },
  },
  selectors: {
    unitsPlayerOne: (state) => state.unitsPlayerOne,
    armyPlayerOne: (state) => state.armyPlayerOne,
    workersPlayerOne: (state) => state.workersPlayerOne,
    mineralsMinePlayerOne: (state) => state.mineralsMinePlayerOne,
    mineralsPlayerOne: (state) => state.mineralsPlayerOne,
  },
});

export const { addUnitToArmy, addWorker, addMinerals } = gameSlice.actions;

export const {
  unitsPlayerOne,
  armyPlayerOne,
  workersPlayerOne,
  mineralsMinePlayerOne,
  mineralsPlayerOne,
} = gameSlice.selectors;

export const reducerGame = gameSlice.reducer;
