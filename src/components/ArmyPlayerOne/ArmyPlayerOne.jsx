import { useSelector } from "react-redux";

import styles from "./ArmyPlayerOne.module.css";

import { armyPlayerOne } from "../../store/gameSlice";

const ArmyPlayerOne = () => {
  const units = useSelector(armyPlayerOne);

  return (
    <div className={styles.armyPlayerOne}>
      <ul>
        {units.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArmyPlayerOne;
