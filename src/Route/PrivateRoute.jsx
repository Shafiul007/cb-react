import React, { useContext } from 'react';
import { AuthProvider1 } from '../ContextApi/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation();
    console.log(location);
    const {loading,user}=useContext(AuthProvider1);
    if (loading){
        return <div className='text-center'><span className='loading loading-spinner loading-lg'></span></div>
    }
    if (user){
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;