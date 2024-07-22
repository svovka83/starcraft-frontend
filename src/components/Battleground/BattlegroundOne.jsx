import { useDispatch, useSelector } from "react-redux";

import styles from "./Battleground.module.css";

import Unit from "../Unit/Unit";

import { addFighter, selectorBattlegroundOne } from "../../store/gameSlice";

const BattlegroundOne = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorBattlegroundOne);

  const addUnit = (unitId) => {
    dispatch(addFighter(unitId));
  };

  return (
    <div className={styles.battleground}>
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

export default BattlegroundOne;
