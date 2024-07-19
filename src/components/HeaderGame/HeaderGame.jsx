import { useSelector } from "react-redux";

import styles from "./HeaderGame.module.css";

import { selectorMinerals } from "../../store/gameSlice";

const HeaderGame = () => {
  const minerals = useSelector(selectorMinerals);

  return <div className={styles.headerGame}>Minerals: {minerals}</div>;
};

export default HeaderGame;
