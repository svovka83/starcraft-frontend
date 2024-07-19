import { useDispatch, useSelector } from "react-redux";

import styles from "./Shop.module.css";

import { addUnitToArmy, selectorUnits } from "../../store/gameSlice";

const ShopOne = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorUnits);

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

export default ShopOne;
