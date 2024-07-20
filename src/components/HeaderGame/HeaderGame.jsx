import { useDispatch, useSelector } from "react-redux";

import styles from "./HeaderGame.module.css";

import {
  fight,
  selectorMineralsOne,
  selectorMineralsTwo,
  selectorTurn,
} from "../../store/gameSlice";

const HeaderGame = () => {
  const dispatch = useDispatch();
  const mineralsOne = useSelector(selectorMineralsOne);
  const mineralsTwo = useSelector(selectorMineralsTwo);
  const turn = useSelector(selectorTurn);

  const startFight = () => {
    dispatch(fight());
  };

  return (
    <div className={styles.headerGame}>
      <span>MineralsOne: {mineralsOne}</span>
      {turn ? <span>TurnOne</span> : "" }
      <button onClick={startFight}>Fight</button>
      {turn ? ""  : <span>TurnTwo</span> }
      <span>MineralsTwo: {mineralsTwo}</span>
    </div>
  );
};

export default HeaderGame;
