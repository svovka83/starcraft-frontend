import { useSelector } from "react-redux";

import styles from "./Battleground.module.css";

import { selectorBattlegroundOne } from "../../store/gameSlice";

const BattlegroundOne = () => {
  const units = useSelector(selectorBattlegroundOne);

  return (
    <div className={styles.battleground}>
      <ul>
        {units.map((el, index) => (
          <li key={index}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BattlegroundOne;
