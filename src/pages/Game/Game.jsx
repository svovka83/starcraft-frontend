import styles from "./Game.module.css";

import HeaderGame from "../../components/HeaderGame/HeaderGame";
import ShopPlayerOne from "../../components/ShopPlayerOne/ShopPlayerOne";
import ArmyPlayerOne from "../../components/ArmyPlayerOne/ArmyPlayerOne";
import MineralProductPlayerOne from "../../components/MineralProductPlayerOne/MineralProductPlayerOne";

const Game = () => {
  return (
    <div className={styles.game}>
      <h2>
        <HeaderGame />
      </h2>
      <div className={styles.battleground}>
        <div>
          <ShopPlayerOne />
        </div>
        <div>unit 1 player 1</div>
        <div>unit 1 player 2</div>
        <div>shop player 2</div>
        <div>
          <ArmyPlayerOne />
        </div>
        <div>unit 2 player 1</div>
        <div>unit 2 player 2</div>
        <div>army player 2</div>
        <div>
          <MineralProductPlayerOne />
        </div>
        <div>unit 3 player 1</div>
        <div>unit 3 player 2</div>
        <div>minerals player 2</div>
      </div>
    </div>
  );
};

export default Game;
