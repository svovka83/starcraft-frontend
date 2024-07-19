import { useDispatch, useSelector } from "react-redux";

import styles from "./Minerals.module.css";

import WorkersOne from "./Workers/Workers";
import MineOne from "./Mine/Mine";

import { addWorker, selectorWorkersOne } from "../../store/gameSlice";

const MineralsPlayerOne = () => {
  const dispatch = useDispatch();
  const workers = useSelector(selectorWorkersOne);

  const addWorkers = () => {
    if (workers.length > 2) {
      return alert("maximum workers");
    }
    dispatch(addWorker());
  };
  return (
    <div>
      <div>
        <WorkersOne workers={workers} addWorker={addWorkers} />
      </div>
      <div>
        <MineOne />
      </div>
    </div>
  );
};

export default MineralsPlayerOne;
