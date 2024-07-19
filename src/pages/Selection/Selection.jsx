import { Link } from "react-router-dom";

import styles from "./Selection.module.css";

const Selection = () => {
  return (
    <div className={styles.selection}>
      <h2>Selection</h2>
      <ul>
        <Link to="/game">
          <li>zerg</li>
        </Link>
        <Link to="/game">
          <li>terran</li>
        </Link>
        <Link to="/game">
          <li>protoss</li>
        </Link>
      </ul>
    </div>
  );
};

export default Selection;
