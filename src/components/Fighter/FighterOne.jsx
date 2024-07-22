import { useSelector } from "react-redux";

import styles from "./Fighter.module.css";

import Unit from "../Unit/Unit";

import { selectorFighterOne } from "../../store/gameSlice";

const FighterOne = () => {
  const fighter = useSelector(selectorFighterOne);

  return (
    <div className={styles.fighter}>
      <Unit
        id={fighter.id}
        name={fighter.name}
        health={fighter.health}
        attack={fighter.attack}
        // addUnit={addUnit}
      />
    </div>
  );
};

export default FighterOne;
