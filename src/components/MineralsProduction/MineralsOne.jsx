import { useDispatch, useSelector } from "react-redux";

import styles from "./Minerals.module.css";

import Workers from "./Workers/Workers";
import Mine from "./Mine/Mine";

import {
  addWorker,
  addMinerals,
  selectorWorkersOne,
  selectorMineOne,
  selectorTurn,
} from "../../store/gameSlice";

const MineralsOne = () => {
  const dispatch = useDispatch();
  const workers = useSelector(selectorWorkersOne);
  const minerals = useSelector(selectorMineOne);
  const turnRevers = useSelector(selectorTurn);
  const turn = !turnRevers;

  const addWorkers = () => {
    if (workers.length > 2) {
      return alert("maximum workers");
    }
    dispatch(addWorker());
  };

  const takeMinerals = () => dispatch(addMinerals());

  return (
    <div>
      <div>
        <Workers workers={workers} addWorker={addWorkers} turn={turn} />
      </div>
      <div>
        <Mine minerals={minerals} takeMinerals={takeMinerals} turn={turn} />
      </div>
    </div>
  );
};

export default MineralsOne;
