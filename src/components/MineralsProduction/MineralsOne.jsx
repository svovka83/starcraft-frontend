import { useDispatch, useSelector } from "react-redux";

import styles from "./Minerals.module.css";

import Workers from "./Workers/Workers";
import Mine from "./Mine/Mine";

import {
  addMinerals,
  selectorWorkersOne,
  selectorMineOne,
} from "../../store/gameSlice";

const MineralsOne = () => {
  const dispatch = useDispatch();
  const workers = useSelector(selectorWorkersOne);
  const minerals = useSelector(selectorMineOne);

  const takeMinerals = () => dispatch(addMinerals());

  return (
    <div className={styles.minerals}>
      <div className={styles.worker}>
        {workers.map((el, index) => (
          <Workers
            key={index}
            id={el.id}
            name={el.name}
            health={el.health}
            attack={el.attack}
          />
        ))}
      </div>
      <Mine minerals={minerals} takeMinerals={takeMinerals} />
    </div>
  );
};

export default MineralsOne;
