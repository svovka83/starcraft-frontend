import { useDispatch, useSelector } from "react-redux";

import styles from "./ArmyPlayerOne.module.css";

import { armyPlayerOne, addUnitToBattleground } from "../../store/playerOneSlice";

const ArmyPlayerOne = () => {
  const dispatch = useDispatch();
  const units = useSelector(armyPlayerOne);

  const addUnit = (unitId) => {
    console.log(unitId);
    dispatch(addUnitToBattleground(unitId));
  };

  return (
    <div className={styles.armyPlayerOne}>
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

export default ArmyPlayerOne;
