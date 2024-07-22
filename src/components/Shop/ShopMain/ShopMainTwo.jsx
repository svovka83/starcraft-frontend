import { useSelector } from "react-redux";

import styles from "./ShopMainTwo.module.css";

import { selectorBossTwo } from "../../../store/gameSlice";

const ShopMainTwo = (props) => {
  const boss = useSelector(selectorBossTwo);

  return (
    <div className={styles.base}>
      <button className={styles.add_unit} onClick={props.showModalTwo}>
        ShopTwo
      </button>
      <div className={styles.life}>{boss}</div>
    </div>
  );
};

export default ShopMainTwo;
