import { createSlice } from "@reduxjs/toolkit";

import { ZERG, DRONE } from "../constants/zerg";
import { PROTOSS, PROBE } from "../constants/protoss";

const initialState = {
  units: ZERG,
  army: [],
  battlegroundPlayerOne: [],
  workersPlayerOne: [DRONE],
  mineralsMinePlayerOne: 20,
  mineralsPlayerOne: 10,
  
  unitsPlayerTwo: PROTOSS,
  mineralsPlayerTwo: 10,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addUnitToArmyOne: (state, action) => {
      const addUnit = state.units.find(
        (el) => el.id === action.payload
      );

      if (state.mineralsPlayerOne < addUnit.price) return;
      const buyUnit = state.mineralsPlayerOne - addUnit.price;

      const newShop = state.units.filter(
        (el) => el.id !== action.payload
      );
      return {
        ...state,
        units: newShop,
        army: [...state.army, addUnit],
        mineralsPlayerOne: buyUnit,
      };
    },
    addUnitToBattleground: (state, action) => {
      const battleUnit = state.army.find(
        (el) => el.id === action.payload
      );
      const removeUnit = state.army.filter(
        (el) => el.id !== action.payload
      );
      return {
        ...state,
        army: removeUnit,
        battlegroundPlayerOne: [...state.battlegroundPlayerOne, battleUnit],
      };
    },
    addWorker: (state) => {
      const addWorker = DRONE;
      const buyWorker = state.mineralsPlayerOne - addWorker.price;
      return {
        ...state,
        workersPlayerOne: [...state.workersPlayerOne, addWorker],
        mineralsPlayerOne: buyWorker,
      };
    },
    addMinerals: (state) => {
      if (state.mineralsMinePlayerOne < state.workersPlayerOne.length) {
        state.mineralsPlayerOne += state.mineralsMinePlayerOne;
        state.mineralsMinePlayerOne = 0;
      } else {
        state.mineralsMinePlayerOne -= state.workersPlayerOne.length;
        state.mineralsPlayerOne += state.workersPlayerOne.length;
      }
    },
  },
  selectors: {
    selectorUnits: (state) => state.units,
    selectorArmy: (state) => state.army,
    battlegroundPlayerOne: (state) => state.battlegroundPlayerOne,
    workersPlayerOne: (state) => state.workersPlayerOne,
    mineralsMinePlayerOne: (state) => state.mineralsMinePlayerOne,
    mineralsPlayerOne: (state) => state.mineralsPlayerOne,

    unitsPlayerTwo: (state) => state.unitsPlayerTwo,
  },
});

export const {
  addUnitToArmyOne,
  addUnitToBattleground,
  addWorker,
  addMinerals,
} = gameSlice.actions;

export const {
  selectorUnits,
  selectorArmy,
  battlegroundPlayerOne,
  workersPlayerOne,
  mineralsMinePlayerOne,
  mineralsPlayerOne,

  unitsPlayerTwo,
} = gameSlice.selectors;

export const reducerGame = gameSlice.reducer;
