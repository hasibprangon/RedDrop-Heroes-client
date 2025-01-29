import React from 'react';
import Welcome from '../../Shared/Welcome';
import DonorHome from './Donor/DonorHome';

const DashboardHome = () => {
    return (
        <div>
            <Welcome></Welcome>
            <DonorHome></DonorHome>
        </div>
    );
};

export default DashboardHome;