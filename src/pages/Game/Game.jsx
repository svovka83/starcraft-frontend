import React from "react";
import { useSelector } from "react-redux";

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
import Turn from "../../utils/Turn";
import Fight from "../../utils/Fight";

import {
  selectorFighterOne,
  selectorFighterTwo,
  selectorTurn,
} from "../../store/gameSlice";
import FightBoss from "../../utils/FightBoss";

const Game = () => {
  const turn = useSelector(selectorTurn);
  const fighterOne = useSelector(selectorFighterOne);
  const fighterTwo = useSelector(selectorFighterTwo);

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
      <Turn />
      {fighterOne.id && fighterTwo.id && <Fight />}
      {fighterOne.id && !fighterTwo.id && turn && <FightBoss />}
      {!fighterOne.id && fighterTwo.id && !turn && <FightBoss />}
    </div>
  );
};

export default Game;
