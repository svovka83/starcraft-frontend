import styles from "./Game.module.css";

import HeaderGame from "../../components/HeaderGame/HeaderGame";
import ShopOne from "../../components/Shop/ShopOne";
import ShopTwo from "../../components/Shop/ShopTwo";
import ArmyOne from "../../components/Army/ArmyOne";
import ArmyTwo from "../../components/Army/ArmyTwo";
import MineralsPlayerOne from "../../components/MineralsProduction/MineralsOne";
import BattlegroundPlayerOne from "../../components/Battleground/BattlegroundOne";

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
        <div><ShopTwo /></div>
        <div>
          <ArmyOne />
        </div>
        <div>
          <BattlegroundPlayerOne />
        </div>
        <div>Battleground</div>
        <div><ArmyTwo /></div>
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
