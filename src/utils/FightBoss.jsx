import { useDispatch, useSelector } from "react-redux";

import styles from "./FightBoss.module.css";

import { fightBoss, selectorTurn } from "../store/gameSlice";

const FightBoss = () => {
  const dispatch = useDispatch();
  const turn = useSelector(selectorTurn);

  const startFight = () => {
    dispatch(fightBoss());
  };
  return (
    <div className={turn ? styles.one : styles.two}>
      <button onClick={startFight}>Fight Boss</button>
    </div>
  );
};

export default FightBoss;
