import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useVolunteer from '../Hooks/useVolunteer';
import Loading from '../Pages/Loading/Loading';

const VolunteerRoutes = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth(); 
    const  [isVolunteer, isVolunteerLoading] = useVolunteer();

    if(loading || isVolunteerLoading) {
        return <Loading></Loading>
    };

    if(user || isVolunteer) {
        return children
    }
    return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default VolunteerRoutes;