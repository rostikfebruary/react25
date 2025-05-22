import {useAppContext} from "../hooks/useAppContext";

const B = () => {
    const value = useAppContext()
    return (
        <div>
            <h2>B: {value}</h2>
        </div>
    );
};

export {B};