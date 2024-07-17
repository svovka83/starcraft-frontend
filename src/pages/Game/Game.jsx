import styles from "./Game.module.css";

import ShopPlayer_1 from "../../components/ShopPlayer_1/ShopPlayer_1";

const Game = () => {
  return (
    <div className={styles.game}>
      <h2>Game</h2>
      <div className={styles.battleground}>
        <div><ShopPlayer_1 /></div>
        <div>unit 1 player 1</div>
        <div>unit 1 player 2</div>
        <div>shop player 2</div>
        <div>army player 1</div>
        <div>unit 2 player 1</div>
        <div>unit 2 player 2</div>
        <div>army player 2</div>
        <div>minerals player 1</div>
        <div>unit 3 player 1</div>
        <div>unit 3 player 2</div>
        <div>minerals player 2</div>
      </div>
    </div>
  );
};

export default Game;
