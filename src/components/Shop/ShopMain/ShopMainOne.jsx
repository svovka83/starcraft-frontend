import { useSelector } from "react-redux";

import styles from "./ShopMainOne.module.css";

import { selectorBossOne } from "../../../store/gameSlice";

const ShopMainOne = (props) => {
  const boss = useSelector(selectorBossOne);

  return (
    <div className={styles.base}>
      <button className={styles.add_unit} onClick={props.showModalOne}>
        ShopOne
      </button>
      <div className={styles.life}>{boss}</div>
    </div>
  );
};

export default ShopMainOne;
