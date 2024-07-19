import { createSlice } from "@reduxjs/toolkit";

import { ZERG, DRONE } from "../constants/zerg";
import { PROTOSS, PROBE } from "../constants/protoss";

const initialState = {
  unitsPlayerOne: PROTOSS,
  armyPlayerOne: [],
  battlegroundPlayerOne: [],
  workersPlayerOne: [PROBE],
  mineralsMinePlayerOne: 50,
  mineralsPlayerOne: 10,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addUnitToArmy: (state, action) => {
      const addUnit = state.unitsPlayerOne.find(
        (el) => el.id === action.payload
      );

      if (state.mineralsPlayerOne < addUnit.price) return;
      const buyUnit = state.mineralsPlayerOne - addUnit.price;

      const newShop = state.unitsPlayerOne.filter(
        (el) => el.id !== action.payload
      );
      return {
        ...state,
        unitsPlayerOne: newShop,
        armyPlayerOne: [...state.armyPlayerOne, addUnit],
        mineralsPlayerOne: buyUnit,
      };
    },
    addUnitToBattleground: (state, action) => {
      const battleUnit = state.armyPlayerOne.find(
        (el) => el.id === action.payload
      );
      const removeUnit = state.armyPlayerOne.filter(
        (el) => el.id !== action.payload
      );
      return {
        ...state,
        armyPlayerOne: removeUnit,
        battlegroundPlayerOne: [...state.battlegroundPlayerOne, battleUnit],
      };
    },
    addWorker: (state) => {
      const addWorker = PROBE;
      const buyWorker = state.mineralsPlayerOne - addWorker.price;
      return {
        ...state,
        workersPlayerOne: [...state.workersPlayerOne, addWorker],
        mineralsPlayerOne: buyWorker,
      };
    },
    addMinerals: (state) => {
      state.mineralsMinePlayerOne -= state.workersPlayerOne.length;
      state.mineralsPlayerOne += state.workersPlayerOne.length;
    },
  },
  selectors: {
    unitsPlayerOne: (state) => state.unitsPlayerOne,
    armyPlayerOne: (state) => state.armyPlayerOne,
    battlegroundPlayerOne: (state) => state.battlegroundPlayerOne,
    workersPlayerOne: (state) => state.workersPlayerOne,
    mineralsMinePlayerOne: (state) => state.mineralsMinePlayerOne,
    mineralsPlayerOne: (state) => state.mineralsPlayerOne,
  },
});

export const { addUnitToArmy, addUnitToBattleground, addWorker, addMinerals } =
  gameSlice.actions;

export const {
  unitsPlayerOne,
  armyPlayerOne,
  battlegroundPlayerOne,
  workersPlayerOne,
  mineralsMinePlayerOne,
  mineralsPlayerOne,
} = gameSlice.selectors;

export const reducerGame = gameSlice.reducer;
