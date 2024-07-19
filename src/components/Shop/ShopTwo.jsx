import { useDispatch, useSelector } from "react-redux";

import styles from "./Shop.module.css";

import { addUnitToArmy, selectorUnitsTwo } from "../../store/gameSlice";

const ShopTwo = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorUnitsTwo);

  const addUnit = (unitId) => {
    dispatch(addUnitToArmy(unitId));
  };

  return (
    <div className={styles.shop}>
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

export default ShopTwo;
