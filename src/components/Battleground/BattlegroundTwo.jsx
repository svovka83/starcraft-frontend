import { useSelector } from "react-redux";

import styles from "./Battleground.module.css";

import { selectorBattlegroundTwo } from "../../store/gameSlice";

const BattlegroundPlayerOne = () => {
  const units = useSelector(selectorBattlegroundTwo);

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

export default BattlegroundPlayerOne;
