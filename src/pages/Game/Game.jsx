import React from "react";

import styles from "./Game.module.css";

import HeaderGame from "../../components/HeaderGame/HeaderGame";
import ShopOne from "../../components/Shop/ShopOne";
import ShopTwo from "../../components/Shop/ShopTwo";
import ShopModalOne from "../../components/Shop/ShopModalOne";
import ShopModalTwo from "../../components/Shop/ShopModalTwo";
import ArmyOne from "../../components/Army/ArmyOne";
import ArmyTwo from "../../components/Army/ArmyTwo";
import BattlegroundOne from "../../components/Battleground/BattlegroundOne";
import BattlegroundTwo from "../../components/Battleground/BattlegroundTwo";
import MineralsOne from "../../components/MineralsProduction/MineralsOne";
import MineralsTwo from "../../components/MineralsProduction/MineralsTwo";
import FighterOne from "../../components/Fighter/FighterOne";
import FighterTwo from "../../components/Fighter/FighterTwo";

const Game = () => {
  const [modalOne, setModalOne] = React.useState(false);
  const [modalTwo, setModalTwo] = React.useState(false);

  const showModalOne = () => {
    setModalOne(!modalOne);
  };
  const showModalTwo = () => {
    setModalTwo(!modalTwo);
  };

  return (
    <div className={styles.game}>
      <h2>
        <HeaderGame />
      </h2>
      <div className={styles.battleground}>
        <div className={styles.shop_fight}>
          <ShopOne showModalOne={showModalOne} />
          <FighterOne />
          <FighterTwo />
          <ShopTwo showModalTwo={showModalTwo}/>
        </div>
        <div className={styles.army_battle}>
          <span>
            <ArmyOne />
          </span>
          <span>
            <BattlegroundOne />
          </span>
          <span>
            <BattlegroundTwo />
          </span>
          <span>
            <ArmyTwo />
          </span>
        </div>
        <div className={styles.minerals_product}>
          <span>
            <MineralsOne />
          </span>
          <span>StarCraft</span>
          <span>
            <MineralsTwo />
          </span>
        </div>
      </div>
      {modalOne && <ShopModalOne />}
      {modalTwo && <ShopModalTwo />}
    </div>
  );
};

export default Game;
