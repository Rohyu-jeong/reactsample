import { Link } from "react-router-dom";
import { sidebarData } from "../../data/sidebarData";
import { CSSProperties } from "react";

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
        color: "#5e35b1"
    }

    const sidebarElementListStyle: CSSProperties = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
    }

    const sidebarElementStyle: CSSProperties = {
        fontSize: "16px",
        textDecoration: "none",
        color: "#f0ebf7",
    }

    const sidebarElements = sidebarData.map((data:sidebarDataProps, i:number) => {
        return (
            <div key={i} style={sidebarMainStyle}>
                <div style={sidebarNameStyle}>{data.name}</div>
                <div style={sidebarElementListStyle}>
                    {data.categories.map((category, i) => (
                        <Link key={i} to={`/${category}`} style={sidebarElementStyle}>
                            {category === "" ? "게시판 목록" : category}
                        </Link>
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