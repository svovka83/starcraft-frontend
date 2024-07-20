import { useDispatch, useSelector } from "react-redux";

import styles from "./Army.module.css";

import {
  selectorArmyOne,
  addUnitToBattleground,
  selectorTurn,
} from "../../store/gameSlice";

const ArmyOne = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorArmyOne);
  const turnRevers = useSelector(selectorTurn);
  const turn = !turnRevers;

  const addUnit = (unitId) => {
    console.log(unitId);
    dispatch(addUnitToBattleground(unitId));
  };

  return (
    <div className={styles.army}>
      <ul>
        {units.map((el, index) => (
          <li key={el.id}>
            <button disabled={turn} onClick={() => addUnit(el.id)}>
              {el.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArmyOne;
