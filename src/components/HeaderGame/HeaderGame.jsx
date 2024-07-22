import { useSelector } from "react-redux";

import styles from "./HeaderGame.module.css";

import {
  selectorMineralsOne,
  selectorMineralsTwo,
  selectorTurn,
} from "../../store/gameSlice";

const HeaderGame = () => {
  const mineralsOne = useSelector(selectorMineralsOne);
  const mineralsTwo = useSelector(selectorMineralsTwo);
  const turn = useSelector(selectorTurn);

  return (
    <div className={styles.headerGame}>
      <span>MineralsOne: {mineralsOne}</span>
      {turn ? <span>TurnOne</span> : <span>TurnTwo</span> }
      <span>MineralsTwo: {mineralsTwo}</span>
    </div>
  );
};

export default HeaderGame;
