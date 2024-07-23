import { useDispatch, useSelector } from "react-redux";

import styles from "./Minerals.module.css";

import Workers from "./Workers/Workers";
import Mine from "./Mine/Mine";

import {
  addMinerals,
  selectorWorkersTwo,
  selectorMineTwo,
} from "../../store/gameSlice";

const MineralsTwo = () => {
  const dispatch = useDispatch();
  const workers = useSelector(selectorWorkersTwo);
  const minerals = useSelector(selectorMineTwo);

  const takeMinerals = () => dispatch(addMinerals());

  return (
    <div className={styles.minerals}>
      <Workers workers={workers} />
      <Mine minerals={minerals} takeMinerals={takeMinerals} />
    </div>
  );
};

export default MineralsTwo;
