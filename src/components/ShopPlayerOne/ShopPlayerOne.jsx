import { useDispatch, useSelector } from "react-redux";

import styles from "./ShopPlayerOne.module.css";

import { addUnitToArmy, unitsPlayerOne } from "../../store/gameSlice";

const ShopPlayerOne = () => {
  const dispatch = useDispatch();
  const units = useSelector(unitsPlayerOne);

  const addUnit = (unitId) => {
    dispatch(addUnitToArmy(unitId))
  };

  return (
    <div className={styles.shopPlayerOne}>
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
