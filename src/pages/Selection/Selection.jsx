import styles from "./Selection.module.css";

const Selection = () => {
  return (
    <div className={styles.selection}>
      <h2>Selection</h2>
      <ul>
        <li>zerg</li>
        <li>terran</li>
        <li>protoss</li>
      </ul>
    </div>
  );
};

export default Selection;
