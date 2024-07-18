import { useDispatch, useSelector } from "react-redux";

import styles from "./MineralProductPlayerOne.module.css";

import WorkersPlayerOne from "./WorkersPlayerOne/WorkersPlayerOne";

import { addWorker, workersPlayerOne } from "../../store/gameSlice";
import MineralMinePlayerOne from "./MineralMinePlayerOne/MineralMinePlayerOne";

const MineralProductPlayerOne = () => {
  const dispatch = useDispatch();
  const workers = useSelector(workersPlayerOne);

  const addWorkers = () => {
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
