import { CSSProperties } from "react";
import SNSIcons, { SNSIconProps } from "./SNSIcons";
import SNSNames, { SNSNamesProps } from "./SNSNames";

type BackgroundColorStatus = {
    Google: "#ffffff",
    Facebook: "#1877F2",
    Apple: "#000000",
}

type ColorProps = "white" | "Gray";


type SNSButtonProps = {
    SNSIcon: SNSIconProps,
    SNSName: SNSNamesProps,
    SNSBackgroundColor: keyof BackgroundColorStatus,
    SNSColor : ColorProps,
}

const SNSButton = ({SNSIcon, SNSName, SNSBackgroundColor, SNSColor}: SNSButtonProps) => {

    const BackgroundColorObj: BackgroundColorStatus = {
        Google: "#ffffff",
        Facebook: "#1877F2",
        Apple: "#000000",
    }

    const style:CSSProperties = {
        display: "flex",
        padding: "10px",
        gap: "10px",
        width: "fit-content",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        backgroundColor: BackgroundColorObj[SNSBackgroundColor],
        color: SNSColor,
    }

    return (
        <div style={style}>
            <SNSIcons {...SNSIcon}/>
            <SNSNames {...SNSName}/>
        </div>
    );
}

export default SNSButton;