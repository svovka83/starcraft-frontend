import { useSelector } from "react-redux";

import styles from "./BattlegroundPlayerOne.module.css";

import { battlegroundPlayerOne } from "../../store/gameSlice";

const BattlegroundPlayerOne = () => {
  const units = useSelector(battlegroundPlayerOne);

  return (
    <div className={styles.battlegroundPlayerOne}>
      <ul>
        {units.map((el, index) => (
          <li key={index}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BattlegroundPlayerOne;
