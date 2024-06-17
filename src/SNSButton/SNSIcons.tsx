import { IconType } from "react-icons";

export type SNSIconProps = {
    Icon: IconType,
}

const SNSIcons = ({Icon}:SNSIconProps) => {
    return (
        <>
            <Icon></Icon>
        </>
    );
    
}

export default SNSIcons;