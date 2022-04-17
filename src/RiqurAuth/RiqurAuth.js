import React from 'react';
import auth from '../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';


const RiqurAuth = ({children}) => {
    const [user] = useAuthState(auth)
    let location = useLocation()
    if(user){
        return children;
    } else{
         return <Navigate to="/login" state={{form:location}} replace></Navigate>
    }
  



};

export default RiqurAuth;