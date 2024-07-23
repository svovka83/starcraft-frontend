import styles from "./Unit.module.css";

import gidral from "../../images/Marine_SC2_DevRend1.webp";

const Unit = ({ addUnit, id, name, health, attack }) => {
  return (
    <div onClick={() => addUnit(id)}>
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

export default Unit;
