import { BrowserRouter , Routes, Route } from "react-router-dom";
import Board from "./components/page/Board";
import BoardRegister from "./components/page/BoardRegister";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/BoardRegister" element={<BoardRegister />} />
        {/* <Route path="/board/:id" element={<BoardDetail />} /> */} {/*게시물 상세 페이지*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
