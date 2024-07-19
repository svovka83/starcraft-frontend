import { useDispatch, useSelector } from "react-redux";

// import styles from "./MineralProductPlayerOne.module.css";

import WorkersPlayerOne from "./Workers/WorkersPlayerOne";
import MinePlayerOne from "./Mine/MinePlayerOne";

import { addWorker, workersPlayerOne } from "../../store/gameSlice";

const MineralsPlayerOne = () => {
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
        <WorkersPlayerOne workers={workers} addWorker={addWorkers} />
      </div>
      <div>
        <MinePlayerOne />
      </div>
    </div>
  );
};

export default MineralsPlayerOne;
