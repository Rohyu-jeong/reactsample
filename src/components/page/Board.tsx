import { CSSProperties } from "react";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";

const Board = () => {

  const style: CSSProperties = {
    margin: "300px"
  }

  return (
    <>
      <Header />
      <SideBar />
    </>
  );
};

export default Board;
