import { useDispatch, useSelector } from "react-redux";

import styles from "./Battleground.module.css";

import Unit from "../Unit/Unit";

import { addFighterOne, selectorBattlegroundOne } from "../../store/gameSlice";

const BattlegroundOne = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorBattlegroundOne);

  const addUnit = (unitId) => {
    dispatch(addFighterOne(unitId));
  };

  return (
    <div className={styles.battleground}>
      {units.map((el) => (
        <Unit
          key={el.id}
          id={el.id}
          name={el.name}
          health={el.health}
          attack={el.attack}
          // turn={turn}
          addUnit={addUnit}
        />
      ))}
    </div>
  );
};

export default BattlegroundOne;
