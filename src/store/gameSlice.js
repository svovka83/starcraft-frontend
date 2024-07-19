import { createSlice } from "@reduxjs/toolkit";

import { ZERG, DRONE } from "../constants/zerg";
import { PROTOSS, PROBE } from "../constants/protoss";

const initialState = {
  units: ZERG,
  army: [],
  battleground: [],
  workers: [DRONE],
  mine: 20,
  minerals: 10,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addUnitToArmy: (state, action) => {
      const addUnit = state.units.find((el) => el.id === action.payload);

      if (state.minerals < addUnit.price) return;
      const buyUnit = state.minerals - addUnit.price;

      const newShop = state.units.filter((el) => el.id !== action.payload);
      return {
        ...state,
        units: newShop,
        army: [...state.army, addUnit],
        minerals: buyUnit,
      };
    },
    addUnitToBattleground: (state, action) => {
      const battleUnit = state.army.find((el) => el.id === action.payload);
      const removeUnit = state.army.filter((el) => el.id !== action.payload);
      return {
        ...state,
        army: removeUnit,
        battleground: [...state.battleground, battleUnit],
      };
    },
    addWorker: (state) => {
      const addWorker = DRONE;
      const buyWorker = state.minerals - addWorker.price;
      return {
        ...state,
        workers: [...state.workers, addWorker],
        minerals: buyWorker,
      };
    },
    addMinerals: (state) => {
      if (state.mine < state.workers.length) {
        state.minerals += state.mine;
        state.mine = 0;
      } else {
        state.mine -= state.workers.length;
        state.minerals += state.workers.length;
      }
    },
  },
  selectors: {
    selectorUnits: (state) => state.units,
    selectorArmy: (state) => state.army,
    selectorBattleground: (state) => state.battleground,
    selectorWorkers: (state) => state.workers,
    selectorMine: (state) => state.mine,
    selectorMinerals: (state) => state.minerals,

    unitsPlayerTwo: (state) => state.unitsPlayerTwo,
  },
});

export const { addUnitToArmy, addUnitToBattleground, addWorker, addMinerals } =
  gameSlice.actions;

export const {
  selectorUnits,
  selectorArmy,
  selectorBattleground,
  selectorWorkers,
  selectorMine,
  selectorMinerals,

  unitsPlayerTwo,
} = gameSlice.selectors;

export const reducerGame = gameSlice.reducer;
