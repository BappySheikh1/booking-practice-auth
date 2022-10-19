import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth =getAuth(app)
const UseContext = ({children}) => {
    const [user,setUser]=useState({});
    const [loadding, setLoadding]=useState(true)

//    create register email password auth
    const createUser=(email,password)=>{
        setLoadding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };

    // updateProfileName
    const updateProfileName=(name)=>{
        return updateProfile(auth.currentUser,{
          displayName: name
        })
    }
   
    // email verifigation added
    const emailVarify=()=>{
        return sendEmailVerification(auth.currentUser)
    }

    // create log in email password
    const userLogIn=(email,password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // LogOut email
    const logOut =()=>{
        setLoadding(true)
        return signOut(auth)
    }

    // Forget password & send email 
    const forgetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }


    // Google lohin with popup
    const googleProvider= new GoogleAuthProvider();
    const googleLoginWithPopUp=()=>{
        setLoadding(true)
        return signInWithPopup(auth,googleProvider)
    }

    //firebsae onStateChange
    useEffect(()=>{
      const  unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoadding(false)
        })

        return ()=> unsubscribe();
    },[]) 

    const authinfo = {user,createUser,userLogIn,logOut,googleLoginWithPopUp,updateProfileName,emailVarify,forgetPassword,loadding}
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;