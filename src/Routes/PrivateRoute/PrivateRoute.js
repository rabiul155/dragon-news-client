import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(user, loading);

    if (loading) {
        return <div className='text-center'>Loading.....</div>
    }

    if (!user?.uid) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    }

    return children
};

export default PrivateRoute;