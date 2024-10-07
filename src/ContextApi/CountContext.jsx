import { createContext, useState } from "react";

export const CountContext1=createContext();


const CountContext = ({children}) => {
    const [count,setCount]=useState(0);
    return (
        <CountContext1.Provider value={[count,setCount]}>
            {children}
        </CountContext1.Provider>
    );
};

export default CountContext;
