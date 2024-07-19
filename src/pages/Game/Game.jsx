import styles from "./Game.module.css";

import HeaderGame from "../../components/HeaderGame/HeaderGame";
import ShopPlayerOne from "../../components/ShopPlayerOne/ShopPlayerOne";
import ArmyPlayerOne from "../../components/ArmyPlayerOne/ArmyPlayerOne";
import MineralProductPlayerOne from "../../components/MineralProductPlayerOne/MineralProductPlayerOne";
import BattlegroundPlayerOne from "../../components/BattlegroundPlayerOne/BattlegroundPlayerOne";

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
        <div>empty</div>
        <div>empty</div>
        <div>shop</div>
        <div>
          <ArmyPlayerOne />
        </div>
        <div>
          <BattlegroundPlayerOne />
        </div>
        <div>Battleground</div>
        <div>army</div>
        <div>
          <MineralProductPlayerOne />
        </div>
        <div>empty</div>
        <div>empty</div>
        <div>minerals</div>
      </div>
    </div>
  );
};

export default Game;
