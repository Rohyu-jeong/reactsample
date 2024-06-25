import { Link } from "react-router-dom";
import { sidebarData } from "../../data/sidebarData";
import { CSSProperties } from "react";
import "../../style/hover.css";

type sidebarDataProps = {
    name: string,
    categories: string[],
}

const SidebarMenu = () => {

    const sidebarMainStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "80%",
        padding: "40px 30px 40px 20px",
        borderBottom: "1px solid #dbdbdb"
    }

    const sidebarNameStyle: CSSProperties = {
        fontSize: "16px",
        fontWeight: "bold",
    }

    const sidebarElementListStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    }

    const sidebarElementHoverStyle: CSSProperties = {
        width: "85%",
        fontSize: "16px",
        textDecoration: "none",
        color: "black",
        paddingLeft: "50px",
    }

    const sidebarElementStyle: CSSProperties = {
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "10px 0",
        borderRadius: "10px",
        fontSize: "16px",
        textDecoration: "none",
        color: "black",
    }

    const sidebarElements = sidebarData.map((data:sidebarDataProps, i:number) => {
        return (
            <div key={i} style={sidebarMainStyle}>
                <div style={sidebarNameStyle}>{data.name}</div>
                <div style={sidebarElementListStyle}>
                    {data.categories.map((category, i) => (
                        <div className="sidebarElementList" style={sidebarElementHoverStyle}>
                            <Link key={i} to={`/${category}`} style={sidebarElementStyle}>
                                {category === "" ? "Board" : category}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    })

    return (
        <>
            {sidebarElements}
        </>
    );
}

export default SidebarMenu;