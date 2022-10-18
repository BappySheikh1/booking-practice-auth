import React, { createContext } from 'react';


export const AuthContext = createContext()
const UseContext = ({children}) => {

    const authinfo={displayName: "Bappy Sheikh"}
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;