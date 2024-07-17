import { Routes, Route } from "react-router-dom";

import Selection from "./pages/Selection/Selection";
import Start from "./pages/Start/Start";
import Game from "./pages/Game/Game";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
