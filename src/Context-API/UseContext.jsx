import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth =getAuth(app)
const UseContext = ({children}) => {
    const [user,setUser]=useState({displayName: "Bappy Sheikh"})
//    create register email password auth
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };
    // create log in email password
    const userLogIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // LogOut email
    const logOut =()=>{
        return signOut(auth)
    }

    //firebsae onStateChange
    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
    },[]) 

    const authinfo = {user,createUser,userLogIn,logOut}
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;