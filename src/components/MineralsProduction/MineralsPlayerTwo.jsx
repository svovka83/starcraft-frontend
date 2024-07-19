import { useDispatch, useSelector } from "react-redux";

// import styles from "./MineralProductPlayerOne.module.css";

import WorkersPlayerTwo from "./Workers/WorkersPlayerTwo";
import MinePlayerTwo from "./Mine/MinePlayerTwo";

import { addWorker, workersPlayerOne } from "../../store/gameSlice";

const MineralsPlayerTwo = () => {
  const dispatch = useDispatch();
  const workers = useSelector(workersPlayerOne);

  const addWorkers = () => {
    if (workers.length > 2) {
      return alert("maximum workers");
    }
    dispatch(addWorker());
  };
  return (
    <div>
      <div>
        <WorkersPlayerTwo workers={workers} addWorker={addWorkers} />
      </div>
      <div>
        <MinePlayerTwo />
      </div>
    </div>
  );
};

export default MineralsPlayerTwo;
