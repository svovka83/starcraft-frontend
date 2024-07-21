import { useDispatch, useSelector } from "react-redux";

import styles from "./ShopModal.module.css";

import { addUnitToArmy, selectorUnitsOne } from "../../../store/gameSlice";

const ShopModalOne = (props) => {
  const dispatch = useDispatch();
  const units = useSelector(selectorUnitsOne);

  const addUnit = (unitId) => {
    dispatch(addUnitToArmy(unitId));
    props.setModalOne(!props.modalOne);
  };

  return (
    <div className={styles.shop_modal}>
      <ul>
        {units.map((el) => (
          <li key={el.id}>
            <button onClick={() => addUnit(el.id)}>
              {el.name} price: {el.price}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopModalOne;
