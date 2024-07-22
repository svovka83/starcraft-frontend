import styles from "./ShopMainOne.module.css";

const ShopMainOne = (props) => {
  return (
    <div className={styles.base}>
      <button className={styles.add_unit} onClick={props.showModalOne}>
        ShopOne
      </button>
    </div>
  );
};

export default ShopMainOne;
