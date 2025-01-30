import React from 'react';
import Welcome from '../../Shared/Welcome';
import DonorHome from './Donor/DonorHome';
import useDonor from '../../Hooks/useDonor';
import useAdmin from '../../Hooks/useAdmin';
import useVolunteer from '../../Hooks/useVolunteer';

const DashboardHome = () => {
    const [isDonor] = useDonor();
    const [isAdmin, isLoading] = useAdmin();
    const [isVolunteer, isVolunteerLoading] = useVolunteer()
    return (
        <div>
            <Welcome></Welcome>
           {isDonor && <DonorHome></DonorHome>}
        </div>
    );
};

export default DashboardHome;