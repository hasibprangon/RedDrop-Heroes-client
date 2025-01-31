import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading/Loading';

const AdminRoutes = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth();
    const [isAdmin, isLoading] = useAdmin();

    if(loading || isLoading) {
        return <Loading></Loading>
    }

    if(user || isAdmin) {
        return children;
    }

    return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default AdminRoutes;