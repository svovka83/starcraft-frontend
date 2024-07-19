import { useDispatch, useSelector } from "react-redux";

import styles from "./ShopPlayer.module.css";

import { addUnitToArmyOne, unitsPlayerTwo } from "../../store/gameSlice";

const ShopPlayerTwo = () => {
  const dispatch = useDispatch();
  const units = useSelector(unitsPlayerTwo);

  const addUnit = (unitId) => {
    dispatch(addUnitToArmyOne(unitId));
  };
  return (
    <div className={styles.shopPlayer}>
      <ul>
        {units.map((el) => (
          <li key={el.id} onClick={() => addUnit(el.id)}>
            {el.name} price: {el.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopPlayerTwo;
