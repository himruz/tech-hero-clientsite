import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <div className='h-screen	text-center text-violet-800	text-4xl	'>Loading...</div>
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace/>
    }

    return children;
};

export default PrivateRouter;