import React from "react";

import styles from "./Game.module.css";

import HeaderGame from "../../components/HeaderGame/HeaderGame";
import ShopMainOne from "../../components/Shop/ShopMain/ShopMainOne";
import ShopMainTwo from "../../components/Shop/ShopMain/ShopMainTwo";
import ShopModalOne from "../../components/Shop/ShopModal/ShopModalOne";
import ShopModalTwo from "../../components/Shop/ShopModal/ShopModalTwo";
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
          <ShopMainOne showModalOne={showModalOne} />
          <FighterOne />
          <FighterTwo />
          <ShopMainTwo showModalTwo={showModalTwo} />
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
      {modalOne && (
        <ShopModalOne setModalOne={setModalOne} modalOne={modalOne} />
      )}
      {modalTwo && (
        <ShopModalTwo setModalTwo={setModalTwo} modalTwo={modalTwo} />
      )}
    </div>
  );
};

export default Game;
