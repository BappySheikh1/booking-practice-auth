import React, { createContext, useState } from 'react';


export const AuthContext = createContext()
const UseContext = ({children}) => {
    const [user,setUser]=useState({displayName: "Bappy Sheikh"})

    const authinfo = {user}
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;