import { useSelector } from "react-redux";

import styles from "./Battleground.module.css";

import { selectorBattleground } from "../../store/gameSlice";

const BattlegroundPlayerOne = () => {
  const units = useSelector(selectorBattleground);

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
