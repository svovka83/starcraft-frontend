import styles from "./Game.module.css";

import HeaderGame from "../../components/HeaderGame/HeaderGame";
import ShopOne from "../../components/Shop/ShopOne";
import ShopTwo from "../../components/Shop/ShopTwo";
import ArmyOne from "../../components/Army/ArmyOne";
import ArmyTwo from "../../components/Army/ArmyTwo";
import BattlegroundOne from "../../components/Battleground/BattlegroundOne";
import BattlegroundTwo from "../../components/Battleground/BattlegroundTwo";
import MineralsOne from "../../components/MineralsProduction/MineralsOne";
import MineralsTwo from "../../components/MineralsProduction/MineralsTwo";
import FighterOne from "../../components/Fighter/FighterOne";
import FighterTwo from "../../components/Fighter/FighterTwo";

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
        <div>
          <FighterOne />
        </div>
        <div>
          <FighterTwo />
        </div>
        <div>
          <ShopTwo />
        </div>
        <div>
          <ArmyOne />
        </div>
        <div>
          <BattlegroundOne />
        </div>
        <div>
          <BattlegroundTwo />
        </div>
        <div>
          <ArmyTwo />
        </div>
        <div>
          <MineralsOne />
        </div>
        <div>empty</div>
        <div>empty</div>
        <div>
          <MineralsTwo />
        </div>
      </div>
    </div>
  );
};

export default Game;
