import { useSelector } from "react-redux";

import styles from "./HeaderGame.module.css";

import {
  selectorMineralsOne,
  selectorMineralsTwo,
} from "../../store/gameSlice";

const HeaderGame = () => {
  const mineralsOne = useSelector(selectorMineralsOne);
  const mineralsTwo = useSelector(selectorMineralsTwo);

  return (
    <div className={styles.headerGame}>
      <span>MineralsOne: {mineralsOne}</span>
      <span>MineralsTwo: {mineralsTwo}</span>
    </div>
  );
};

export default HeaderGame;
