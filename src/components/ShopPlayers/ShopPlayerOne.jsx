import { useDispatch, useSelector } from "react-redux";

import styles from "./ShopPlayer.module.css";

import { addUnitToArmyOne, selectorUnits } from "../../store/gameSlice";

const ShopPlayerOne = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorUnits);

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

export default ShopPlayerOne;
