import { useDispatch, useSelector } from "react-redux";

import styles from "./Battleground.module.css";

import Unit from "../Unit/Unit";

import { addFighterTwo, selectorBattlegroundTwo } from "../../store/gameSlice";

const BattlegroundTwo = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorBattlegroundTwo);

  const addUnit = (unitId) => {
    dispatch(addFighterTwo(unitId));
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

export default BattlegroundTwo;
