import styles from "./Unit.module.css";

import gidral from "../../images/Marine_SC2_DevRend1.webp";

const Unit = ({ addUnit, id, name, health, attack }) => {
  return (
    <div className={styles.unit} onClick={() => addUnit(id)}>
      <div className={styles.params}>
        <div className={styles.name}>{name}</div>
        <div className={styles.health_attack}>
          <div className={styles.health}>{health}</div>
          <div className={styles.attack}>{attack}</div>
        </div>
      </div>
      <img className={styles.img} src={gidral} alt="unit" />
    </div>
  );
};

export default Unit;
