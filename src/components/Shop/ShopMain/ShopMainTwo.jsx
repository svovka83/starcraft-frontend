import { useSelector } from "react-redux";

import styles from "./ShopMainTwo.module.css";

import { selectorTurn } from "../../../store/gameSlice";

const ShopTwo = (props) => {
  const turn = useSelector(selectorTurn);
  
  return (
    <div className={styles.base}>
      <button
        disabled={turn}
        className={styles.add_unit}
        onClick={props.showModalTwo}
      >
        addUnit
      </button>
    </div>
  );
};

export default ShopTwo;
