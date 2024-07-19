import { useSelector } from "react-redux";

import styles from "./HeaderGame.module.css";

import { mineralsPlayerOne } from "../../store/playerOneSlice";

const HeaderGame = () => {
  const minerals = useSelector(mineralsPlayerOne);
  return <div className={styles.headerGame}>Minerals: {minerals}</div>;
};

export default HeaderGame;
