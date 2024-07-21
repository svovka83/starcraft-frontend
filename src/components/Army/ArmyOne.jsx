import { useDispatch, useSelector } from "react-redux";

import styles from "./Army.module.css";

import Unit from "../Unit/Unit";

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
    dispatch(addUnitToBattleground(unitId));
  };

  return (
    <div className={styles.army}>
      {units.map((el) => (
        <Unit
          key={el.id}
          id={el.id}
          name={el.name}
          health={el.health}
          attack={el.attack}
          turn={turn}
          addUnit={addUnit}
        />
      ))}
    </div>
  );
};

export default ArmyOne;
