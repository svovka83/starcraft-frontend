import { useDispatch, useSelector } from "react-redux";

import styles from "./Shop.module.css";

import {
  addUnitToArmy,
  selectorTurn,
  selectorUnitsOne,
} from "../../store/gameSlice";

const ShopModalOne = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectorUnitsOne);
  const turnRevers = useSelector(selectorTurn);
  const turn = !turnRevers;

  const addUnit = (unitId) => {
    dispatch(addUnitToArmy(unitId));
  };

  return (
    <div className={styles.shop}>
      <ul>
        {units.map((el) => (
          <li key={el.id}>
            <button disabled={turn} onClick={() => addUnit(el.id)}>
              {el.name} price: {el.price}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopModalOne;
