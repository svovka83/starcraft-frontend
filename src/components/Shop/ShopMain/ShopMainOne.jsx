import { useSelector } from "react-redux";

import styles from "./ShopMainOne.module.css";

import { selectorTurn } from "../../../store/gameSlice";

const ShopMainOne = (props) => {
  const turnRevers = useSelector(selectorTurn);
  const turn = !turnRevers;

  return (
    <div className={styles.base}>
      <button
        disabled={turn}
        className={styles.add_unit}
        onClick={props.showModalOne}
      >
        addUnit
      </button>
    </div>
  );
};

export default ShopMainOne;
