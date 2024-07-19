import { useDispatch, useSelector } from "react-redux";

import { addMinerals, mineralsMinePlayerOne } from "../../../store/gameSlice";

const MineralMinePlayerOne = () => {
  const dispatch = useDispatch();
  const minerals = useSelector(mineralsMinePlayerOne);

  return (
    <div>
      <button onClick={() => dispatch(addMinerals())}>Add minerals</button>
      <p>Minerals: {minerals} </p>
    </div>
  );
};

export default MineralMinePlayerOne;
