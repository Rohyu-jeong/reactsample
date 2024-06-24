import { CSSProperties } from "react";
import HeaderNavi from "./HeaderNavi";
import Logo from "./Logo";

const Header = () => {

  const headerStyle: CSSProperties = {
    width: "100vw",
    height: "70px",
    backgroundColor: "white",
    borderBottom: "1px solid #dbdbdb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    zIndex: "5",
  };


  return (
    <header style={headerStyle}>
        <Logo />
        <HeaderNavi />
    </header>
  );
};

export default Header;
