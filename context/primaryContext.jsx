import { createContext, useState } from "react";

export const primarycontext = createContext();


const PrimaryProvider = ({children}) => {

    const [camps,setCamps] = useState([]);
    const {states, setStates} = useState([]);

    return (
        <primarycontext.Provider value=
        {{
            camps,
            setCamps,

            states,
            setStates
        }}>
            {children}
        </primarycontext.Provider>
    )

}

export default PrimaryProvider;
