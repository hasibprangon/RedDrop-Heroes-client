import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    };

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;