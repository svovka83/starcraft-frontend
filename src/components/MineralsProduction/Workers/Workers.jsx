import styles from "./Worker.module.css";

import gidral from "../../../images/Drone_SC1_GameAnim1.webp";

const Workers = ({ name, health, attack }) => {
  return (
    <div>
      <div className={styles.params}>
        <div className={styles.name}>{name}</div>
        <div className={styles.health_attack}>
          <span className={styles.health}>{health}</span>
          <span className={styles.attack}>{attack}</span>
        </div>
      </div>
      <img className={styles.img} src={gidral} alt="unit" />
    </div>
  );
};

export default Workers;
