import { useDispatch, useSelector } from "react-redux";

import styles from "./MineralProductPlayerOne.module.css";

import WorkersPlayerOne from "./WorkersPlayerOne/WorkersPlayerOne";
import MineralMinePlayerOne from "./MineralMinePlayerOne/MineralMinePlayerOne";

import { addWorker, workersPlayerOne } from "../../store/gameSlice";

const MineralProductPlayerOne = () => {
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
        <MineralMinePlayerOne />
      </div>
    </div>
  );
};

export default MineralProductPlayerOne;
