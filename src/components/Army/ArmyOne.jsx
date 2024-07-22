import { useDispatch, useSelector } from "react-redux";

import styles from "./Army.module.css";

import Unit from "../Unit/Unit";

import { selectorArmyOne, addUnitToBattleground } from "../../store/gameSlice";

const ArmyOne = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorArmyOne);

  const addUnit = (unitId) => {
    dispatch(addUnitToBattleground(unitId));
  };

  return (
    <div className={styles.army}>
      {units.map((el, index) => (
        <Unit
          key={index}
          id={el.id}
          name={el.name}
          health={el.health}
          attack={el.attack}
          addUnit={addUnit}
        />
      ))}
    </div>
  );
};

export default ArmyOne;
