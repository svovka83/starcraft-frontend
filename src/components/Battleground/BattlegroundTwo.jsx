import { useDispatch, useSelector } from "react-redux";

import styles from "./Battleground.module.css";

import { addFighterTwo, selectorBattlegroundTwo } from "../../store/gameSlice";

const BattlegroundTwo = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorBattlegroundTwo);

  const addUnit = (unitId) => {
    dispatch(addFighterTwo(unitId));
  };

  return (
    <div className={styles.battleground}>
      <ul>
        {units.map((el, index) => (
          <li key={index} onClick={() => addUnit(el.id)}>
            {el.health} :health {el.name} attack: {el.attack}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BattlegroundTwo;
