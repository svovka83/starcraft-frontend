import styles from "./Game.module.css";

import HeaderGame from "../../components/HeaderGame/HeaderGame";
import ShopOne from "../../components/Shop/ShopOne";
import ArmyPlayerOne from "../../components/Army/Army";
import MineralsPlayerOne from "../../components/MineralsProduction/Minerals";
import BattlegroundPlayerOne from "../../components/Battleground/Battleground";

const Game = () => {
  return (
    <div className={styles.game}>
      <h2>
        <HeaderGame />
      </h2>
      <div className={styles.battleground}>
        <div>
          <ShopOne />
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
          <MineralsPlayerOne />
        </div>
        <div>empty</div>
        <div>empty</div>
        <div>MineralsPlayerTwo</div>
      </div>
    </div>
  );
};

export default Game;
