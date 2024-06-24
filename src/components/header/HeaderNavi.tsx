import { CSSProperties } from "react";
import { headerMenuData } from "../../data/headerData";
import { Link } from "react-router-dom";

const HeaderNavi = () => {

    const headerNaviStyle: CSSProperties = {
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: "70px",
    };

    const headerNaviListStyle: CSSProperties = {
        fontSize: "16px",
        textDecoration: "none",
        color: "#5e35b1"
    };

    const naviElements = headerMenuData.map((data: string, i: number) => {
        return (
            <Link key={i} to={`/${data}`} style={headerNaviListStyle}>
                {data}
            </Link>
        );
    });

    return (
        <div style={headerNaviStyle}>
            {naviElements}
        </div>
    );
}

export default HeaderNavi;