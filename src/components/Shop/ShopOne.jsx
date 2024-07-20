import { useDispatch, useSelector } from "react-redux";

import styles from "./Shop.module.css";

import { addUnitToArmy, selectorTurn, selectorUnitsOne } from "../../store/gameSlice";

const ShopOne = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorUnitsOne);
  const turn = useSelector(selectorTurn);

  console.log(turn)

  const addUnit = (unitId) => {
    dispatch(addUnitToArmy(unitId));
  };

  return (
    <div className={styles.shop}>
      <ul>
        {units.map((el) => (
          <li key={el.id} disabled={turn} onClick={() => addUnit(el.id)}>
            {el.name} price: {el.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopOne;
