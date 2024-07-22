import styles from "./ShopMainTwo.module.css";

const ShopMainTwo = (props) => {
  return (
    <div className={styles.base}>
      <button className={styles.add_unit} onClick={props.showModalTwo}>
      ShopTwo
      </button>
    </div>
  );
};

export default ShopMainTwo;
