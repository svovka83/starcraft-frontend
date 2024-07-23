import { useDispatch, useSelector } from "react-redux";

import styles from "./ShopMainTwo.module.css";

import {
  addWorker,
  selectorBossTwo,
  selectorWorkersTwo,
} from "../../../store/gameSlice";

const ShopMainTwo = (props) => {
  const dispatch = useDispatch();
  const boss = useSelector(selectorBossTwo);
  const workers = useSelector(selectorWorkersTwo);

  const addWorkers = () => {
    if (workers.length > 2) {
      return alert(`maximum ${workers[0].name}`);
    }
    dispatch(addWorker());
  };

  return (
    <div className={styles.base}>
      <button className={styles.add_unit} onClick={props.showModalTwo}>
        ShopTwo
      </button>
      <div className={styles.life}>{boss}</div>
      <button onClick={addWorkers}>Add worker</button>
    </div>
  );
};

export default ShopMainTwo;
