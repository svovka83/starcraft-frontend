import { createSlice } from "@reduxjs/toolkit";

import { ZERG, DRONE } from "../constants/zerg";
import { PROTOSS, PROBE } from "../constants/protoss";

const initialState = {
  one: {
    units: ZERG,
    army: [],
    battleground: [],
    workers: [DRONE],
    mine: 20,
    minerals: 10,
  },
  two: {
    units: PROTOSS,
    army: [],
    battleground: [],
    workers: [PROBE],
    mine: 20,
    minerals: 10,
  },
  turn: true,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addUnitToArmy: (state, action) => {
      const player = state.turn ? state.one : state.two;

      const addUnit = player.units.find((el) => el.id === action.payload);

      if (player.minerals < addUnit.price) return;
      const buyUnit = player.minerals - addUnit.price;

      const newShop = player.units.filter((el) => el.id !== action.payload);
      return {
        ...state,
        one: {
          ...player,
          units: newShop,
          army: [...player.army, addUnit],
          minerals: buyUnit,
        },
      };
    },
    addUnitToBattleground: (state, action) => {
      const player = state.turn ? state.one : state.two;

      const battleUnit = player.army.find((el) => el.id === action.payload);
      const removeUnit = player.army.filter((el) => el.id !== action.payload);
      return {
        ...state,
        one: {
          ...player,
          army: removeUnit,
          battleground: [...player.battleground, battleUnit],
        },
      };
    },
    addWorker: (state) => {
      const player = state.turn ? state.one : state.two;

      const addWorker = player.workers;
      const buyWorker = player.minerals - addWorker.price;
      return {
        ...state,
        one: {
          ...player,
          workers: [...player.workers, addWorker],
          minerals: buyWorker,
        },
      };
    },
    addMinerals: (state) => {
      const player = state.turn ? state.one : state.two;

      if (player.mine < player.workers.length) {
        player.minerals += player.mine;
        player.mine = 0;
      } else {
        player.mine -= player.workers.length;
        player.minerals += player.workers.length;
      }
    },
  },
  selectors: {
    selectorUnitsOne: (state) => state.one.units,
    selectorArmy: (state) => state.one.army,
    selectorBattleground: (state) => state.one.battleground,
    selectorWorkers: (state) => state.one.workers,
    selectorMine: (state) => state.one.mine,
    selectorMinerals: (state) => state.one.minerals,
    
    selectorUnitsTwo: (state) => state.two.units,
  },
});

export const { addUnitToArmy, addUnitToBattleground, addWorker, addMinerals } =
  gameSlice.actions;

export const {
  selectorUnitsOne,
  selectorArmy,
  selectorBattleground,
  selectorWorkers,
  selectorMine,
  selectorMinerals,

  selectorUnitsTwo,
} = gameSlice.selectors;

export const reducerGame = gameSlice.reducer;
