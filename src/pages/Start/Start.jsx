import { Link } from "react-router-dom";

import styles from "./Start.module.css";

const Start = () => {
  return (
    <div className={styles.start}>
      <h1>StarCraft</h1>
      <Link to="/selection">
        <button>start game</button>
      </Link>
    </div>
  );
};

export default Start;
