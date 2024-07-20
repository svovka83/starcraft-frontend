import { useSelector } from "react-redux";

import { selectorFighterOne } from "../../store/gameSlice";

const FighterOne = () => {
  const fighter = useSelector(selectorFighterOne);

  return (
    <div>
      <h3>{fighter.name}</h3>
      <p>health: {fighter.health}</p>
      <p>attack: {fighter.attack}</p>
    </div>
  );
};

export default FighterOne;
