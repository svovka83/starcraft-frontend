import { useDispatch, useSelector } from "react-redux";

import styles from "./Army.module.css";

import {
  selectorArmyTwo,
  addUnitToBattleground,
  selectorTurn,
} from "../../store/gameSlice";

const ArmyTwo = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorArmyTwo);
  const turn = useSelector(selectorTurn);

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

export default ArmyTwo;
