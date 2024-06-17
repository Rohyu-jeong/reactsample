export type SNSNamesProps = {
    name: "Google" | "Facebook" | "Apple";
}

const SNSNames = ({name}:SNSNamesProps) => {
    return <span>Start with {name}</span>;
}

export default SNSNames;