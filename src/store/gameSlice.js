import { createSlice } from "@reduxjs/toolkit";

import { ZERG, DRONE } from "../constants/zerg";
import { PROTOSS, PROBE } from "../constants/protoss";

const initialState = {
  one: {
    units: ZERG,
    army: [],
    battleground: [],
    fighter: {},
    boss: 15,
    workers: [DRONE],
    mine: 20,
    minerals: 5,
  },
  two: {
    units: PROTOSS,
    army: [],
    battleground: [],
    fighter: {},
    boss: 15,
    workers: [PROBE],
    mine: 20,
    minerals: 5,
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
        [state.turn ? "one" : "two"]: {
          ...player,
          units: newShop,
          army: [...player.army, addUnit],
          minerals: buyUnit,
        },
        turn: !state.turn,
      };
    },
    addUnitToBattleground: (state, action) => {
      const player = state.turn ? state.one : state.two;

      const battleUnit = player.army.find((el) => el.id === action.payload);
      const removeUnit = player.army.filter((el) => el.id !== action.payload); // ???
      return {
        ...state,
        [state.turn ? "one" : "two"]: {
          ...player,
          army: removeUnit,
          battleground: [...player.battleground, battleUnit],
        },
        turn: !state.turn,
      };
    },
    addWorker: (state) => {
      const player = state.turn ? state.one : state.two;

      if (player.workers.length > 2) return;

      const addWorker = player.workers[0];
      if (player.minerals === 0) return;
      const buyWorker = player.minerals - addWorker.price;
      return {
        ...state,
        [state.turn ? "one" : "two"]: {
          ...player,
          workers: [...player.workers, addWorker],
          minerals: buyWorker,
        },
        turn: !state.turn,
      };
    },
    addMinerals: (state) => {
      const player = state.turn ? state.one : state.two;

      if (player.mine === 0) return;
      else if (player.mine < player.workers.length) {
        player.minerals += player.mine;
        state.turn = !state.turn;
      } else {
        player.mine -= player.workers.length;
        player.minerals += player.workers.length;
        state.turn = !state.turn;
      }
    },
    addFighter: (state, action) => {
      const player = state.turn ? state.one : state.two;

      const fighter = player.battleground.find(
        (el) => el.id === action.payload
      );
      const removeUnit = player.battleground.filter(
        (el) => el.id !== action.payload
      );

      const returnUnit = player.fighter.name
        ? [...removeUnit, player.fighter]
        : removeUnit;

      return {
        ...state,
        [state.turn ? "one" : "two"]: {
          ...player,
          battleground: returnUnit,
          fighter: fighter,
        },
        turn: !state.turn,
      };
    },
    fight: (state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = state.turn ? state.two : state.one;

      if (player.fighter.name && opponent.fighter.name) {
        opponent.fighter.health -= player.fighter.attack;
        player.fighter.health -= opponent.fighter.attack / 2;
      } else return;

      if (opponent.fighter.health <= 0) {
        opponent.fighter = {};
      }
      if (player.fighter.health <= 0) {
        player.fighter = {};
      }

      state.turn = !state.turn;
    },
    fightBoss: (state) => {
      const player = state.turn ? state.one : state.two;
      const opponent = state.turn ? state.two : state.one;

      opponent.boss -= player.fighter.attack;
      player.fighter.health -= player.fighter.attack;

      if (player.fighter.health <= 0) {
        player.fighter = {};
      }

      state.turn = !state.turn;
    },
  },
  selectors: {
    selectorUnitsOne: (state) => state.one.units,
    selectorArmyOne: (state) => state.one.army,
    selectorBattlegroundOne: (state) => state.one.battleground,
    selectorFighterOne: (state) => state.one.fighter,
    selectorBossOne: (state) => state.one.boss,
    selectorWorkersOne: (state) => state.one.workers,
    selectorMineOne: (state) => state.one.mine,
    selectorMineralsOne: (state) => state.one.minerals,

    selectorUnitsTwo: (state) => state.two.units,
    selectorArmyTwo: (state) => state.two.army,
    selectorBattlegroundTwo: (state) => state.two.battleground,
    selectorFighterTwo: (state) => state.two.fighter,
    selectorBossTwo: (state) => state.two.boss,
    selectorWorkersTwo: (state) => state.two.workers,
    selectorMineTwo: (state) => state.two.mine,
    selectorMineralsTwo: (state) => state.two.minerals,

    selectorTurn: (state) => state.turn,
  },
});

export const {
  addUnitToArmy,
  addUnitToBattleground,
  addWorker,
  addMinerals,
  addFighter,
  fight,
  fightBoss,
} = gameSlice.actions;

export const {
  selectorUnitsOne,
  selectorArmyOne,
  selectorBattlegroundOne,
  selectorFighterOne,
  selectorBossOne,
  selectorWorkersOne,
  selectorMineOne,
  selectorMineralsOne,

  selectorUnitsTwo,
  selectorArmyTwo,
  selectorBattlegroundTwo,
  selectorFighterTwo,
  selectorBossTwo,
  selectorWorkersTwo,
  selectorMineTwo,
  selectorMineralsTwo,

  selectorTurn,
} = gameSlice.selectors;

export const reducerGame = gameSlice.reducer;
