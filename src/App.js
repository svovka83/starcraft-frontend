import { Routes, Route } from "react-router-dom";

import Selection from "./pages/Selection/Selection";
import Start from "./pages/Start/Start";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/selection" element={<Selection />} />
      </Routes>
    </div>
  );
}

export default App;
