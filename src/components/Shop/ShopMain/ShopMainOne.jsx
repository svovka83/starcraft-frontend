import { useDispatch, useSelector } from "react-redux";

import styles from "./ShopMainOne.module.css";

import {
  addWorker,
  selectorBossOne,
  selectorWorkersOne,
} from "../../../store/gameSlice";

const ShopMainOne = (props) => {
  const dispatch = useDispatch();
  const boss = useSelector(selectorBossOne);
  const workers = useSelector(selectorWorkersOne);

  const addWorkers = () => {
    if (workers.length > 2) {
      return alert(`maximum ${workers[0].name}`);
    }
    dispatch(addWorker());
  };

  return (
    <div className={styles.base}>
      <button className={styles.add_unit} onClick={props.showModalOne}>
        ShopOne
      </button>
      <div className={styles.life}>{boss}</div>
      <button onClick={addWorkers}>Add worker</button>
    </div>
  );
};

export default ShopMainOne;
