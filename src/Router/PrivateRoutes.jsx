import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context-API/UseContext';

const PrivateRoutes = ({children}) => {
    const {user,loadding}=useContext(AuthContext)
    const location =useLocation()
   if(loadding){
    return <p>Loadding......</p>
   }
    if(user && user?.uid){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;