import { useDispatch, useSelector } from "react-redux";

import styles from "./Battleground.module.css";

import { addFighterOne, selectorBattlegroundOne } from "../../store/gameSlice";

const BattlegroundOne = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorBattlegroundOne);

  const addUnit = (unitId) => {
    dispatch(addFighterOne(unitId));
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

export default BattlegroundOne;
