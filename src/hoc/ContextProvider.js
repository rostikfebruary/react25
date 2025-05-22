import {createContext} from "react";

const Context = createContext(null)

const ContextProvider = ({children}) => {
    return (
        <div>
            <Context.Provider value={'hehahe'}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {ContextProvider, Context};