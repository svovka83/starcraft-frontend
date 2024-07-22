import { useSelector } from "react-redux";

import styles from "./Fighter.module.css";

import gidral from "../../images/gidralisk.png";

import { selectorFighterTwo } from "../../store/gameSlice";

const FighterTwo = () => {
  const fighter = useSelector(selectorFighterTwo);

  return (
    <div className={styles.fighter}>
      <div className={styles.params}>
        <div className={styles.name}>{fighter.name}</div>
        <div className={styles.health_attack}>
          <div className={styles.health}>{fighter.health}</div>
          <div className={styles.attack}>{fighter.attack}</div>
        </div>
      </div>
      <img className={styles.img} src={gidral} alt="unit" />
    </div>
  );
};

export default FighterTwo;
