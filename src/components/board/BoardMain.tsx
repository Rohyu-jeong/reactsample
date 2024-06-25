import { CSSProperties } from "react";
import BoardList from "./BoardList";
import Main from "../main/Main";

const BoardMain = () => {

    const boardContainerStyle:CSSProperties = {
        width: "90%",
        padding: "70px 0"
    }

    const boardListNameStyle:CSSProperties = {
        fontSize: "20px",
        fontWeight: "bold",
    }

    return (
        <>
            <Main>                 
                <div style={boardContainerStyle}>
                    <div style={boardListNameStyle}>게시판 목록</div>
                    <BoardList /> 
                </div>
            </Main>
        </>

    );
}

export default BoardMain;