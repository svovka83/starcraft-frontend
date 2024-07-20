import { useSelector } from "react-redux";

import { selectorFighterTwo } from "../../store/gameSlice";

const FighterTwo = () => {
  const fighter = useSelector(selectorFighterTwo);

  return (
    <div>
      <h3>{fighter.name}</h3>
      <p>health: {fighter.health}</p>
      <p>attack: {fighter.attack}</p>
    </div>
  );
};

export default FighterTwo;
