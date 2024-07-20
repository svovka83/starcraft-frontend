import { useSelector } from "react-redux";

import styles from "./Battleground.module.css";

import { selectorBattlegroundTwo } from "../../store/gameSlice";

const BattlegroundTwo = () => {
  const units = useSelector(selectorBattlegroundTwo);

  return (
    <div className={styles.battleground}>
      <ul>
        {units.map((el, index) => (
          <li key={index}>
            {el.health} :health {el.name} attack: {el.attack}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BattlegroundTwo;
