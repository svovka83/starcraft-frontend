import { useDispatch, useSelector } from "react-redux";

import { addMinerals, selectorMine } from "../../../store/gameSlice";

const MinePlayerOne = () => {
  const dispatch = useDispatch();
  const minerals = useSelector(selectorMine);

  return (
    <div>
      <button onClick={() => dispatch(addMinerals())}>Add minerals</button>
      <p>Minerals: {minerals} </p>
    </div>
  );
};

export default MinePlayerOne;
