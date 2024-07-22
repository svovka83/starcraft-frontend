import { useDispatch, useSelector } from "react-redux";

import styles from "./Minerals.module.css";

import Workers from "./Workers/Workers";
import Mine from "./Mine/Mine";

import {
  addWorker,
  addMinerals,
  selectorWorkersTwo,
  selectorMineTwo,
} from "../../store/gameSlice";

const MineralsTwo = () => {
  const dispatch = useDispatch();
  const workers = useSelector(selectorWorkersTwo);
  const minerals = useSelector(selectorMineTwo);

  const addWorkers = () => {
    if (workers.length > 2) {
      return alert(`maximum ${workers[0].name}`);
    }
    dispatch(addWorker());
  };

  const takeMinerals = () => dispatch(addMinerals());

  return (
    <div className={styles.minerals}>
      <div>
        <Workers workers={workers} addWorker={addWorkers} />
      </div>
      <div>
        <Mine minerals={minerals} takeMinerals={takeMinerals} />
      </div>
    </div>
  );
};

export default MineralsTwo;
