import styles from "./Game.module.css";

import HeaderGame from "../../components/HeaderGame/HeaderGame";

import ShopPlayerOne from "../../components/ShopPlayers/ShopPlayerOne";
import ShopPlayerTwo from "../../components/ShopPlayers/ShopPlayerTwo";

import ArmyPlayerOne from "../../components/ArmyPlayerOne/ArmyPlayerOne";

import MineralsPlayerOne from "../../components/MineralsProduction/MineralsPlayerOne";
import MineralsPlayerTwo from "../../components/MineralsProduction/MineralsPlayerTwo";

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
        <div><ShopPlayerTwo /></div>
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
        <div><MineralsPlayerTwo /></div>
      </div>
    </div>
  );
};

export default Game;
