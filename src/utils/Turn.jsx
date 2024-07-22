import { useSelector } from "react-redux";

import styles from "./Turn.module.css";

import { selectorTurn } from "../store/gameSlice";

const TurnOne = () => {
  const turn = useSelector(selectorTurn);

  return <div className={turn ? styles.one : styles.two}></div>;
};

export default TurnOne;
