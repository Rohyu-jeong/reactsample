import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/page/Board";
import BoardRegister from "./components/page/BoardRegister";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/BoardRegister" element={<BoardRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
