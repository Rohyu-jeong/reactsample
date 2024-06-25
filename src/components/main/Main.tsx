import { CSSProperties, ReactNode } from "react";

type MainProps = {
    children: ReactNode;
}

const Main = ({children}: MainProps) => {

    const mainStyle:CSSProperties = {
        width: "calc(100vw - 300px)",
        height: "calc(100vh - 70px",
        backgroundColor: "#f0ebf7",
        position: "absolute",
        top: "70px",
        left: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    
    const boardListStyle:CSSProperties = {
        width: "95%",
        height: "95%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center"
    }

    return (
        <main style={mainStyle}>
            <div style={boardListStyle}>
                {children}
            </div>
        </main>
    );
}

export default Main;