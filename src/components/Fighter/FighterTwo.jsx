import { useSelector } from "react-redux";

import styles from "./Fighter.module.css";

import Unit from "../Unit/Unit";

import { selectorFighterTwo } from "../../store/gameSlice";

const FighterTwo = () => {
  const fighter = useSelector(selectorFighterTwo);

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

export default FighterTwo;
