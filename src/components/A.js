import {useAppContext} from "../hooks/useAppContext";

const A = () => {
    const value = useAppContext()
    return (
        <div>
            <h1>A: {value}</h1>
        </div>
    );
};

export {A};