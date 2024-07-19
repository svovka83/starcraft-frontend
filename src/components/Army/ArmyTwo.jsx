import { useDispatch, useSelector } from "react-redux";

import styles from "./Army.module.css";

import { selectorArmyTwo, addUnitToBattleground } from "../../store/gameSlice";

const ArmyTwo = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorArmyTwo);

  const addUnit = (unitId) => {
    console.log(unitId);
    dispatch(addUnitToBattleground(unitId));
  };

  return (
    <div className={styles.army}>
      <ul>
        {units.map((el, index) => (
          <li key={index} onClick={() => addUnit(el.id)}>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArmyTwo;
