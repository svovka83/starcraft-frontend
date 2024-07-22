import { useDispatch, useSelector } from "react-redux";

import styles from "./Fight.module.css";

import { fight, selectorTurn } from "../store/gameSlice";

const Fight = () => {
  const dispatch = useDispatch();
  const turn = useSelector(selectorTurn);

  const startFight = () => {
    dispatch(fight());
  };
  return (
    <div className={turn ? styles.one : styles.two}>
      <button onClick={startFight}>Fight</button>
    </div>
  );
};

export default Fight;
