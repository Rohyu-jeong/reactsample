import { CSSProperties } from "react";
import SidebarMenu from "./SidebarMenu";


const SideBar = () => {

    const sidebarStyle: CSSProperties = {
        position: "absolute",
        top: "70px",
        left: "0",
        width: "300px",
        borderRight: "1px solid #dbdbdb",
        height: "calc(100vh - 70px)",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white"

    }

    return (
        <aside style={sidebarStyle}>
            <SidebarMenu />
        </aside>
    );
}

export default SideBar;