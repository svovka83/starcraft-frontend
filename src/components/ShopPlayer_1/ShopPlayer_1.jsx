import styles from "../ShopPlayer_1.module.css";

import { ZERG } from "../../constants/zerg";

const ShopPlayer_1 = () => {
  return (
    <div className={styles.shopPlayer_1}>
      <ul>
        {ZERG.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShopPlayer_1;
