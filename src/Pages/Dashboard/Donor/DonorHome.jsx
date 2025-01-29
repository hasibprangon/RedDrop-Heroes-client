import React from 'react';
import useAuth from '../../../Hooks/useAuth'
import Loading from '../../Loading/Loading';
import DonationTable from '../../../Shared/DonationTable';
import { Link } from 'react-router-dom';
import useDonationRequests from '../../../Hooks/useDonationRequests';

const DonorHome = () => {
    const { user } = useAuth();
    const donationRequest = 1;
    const { data, isLoading, refetch } = useDonationRequests({
        email: user?.email,

    });
    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div >
            {donationRequest > 0 ? (
                <>
                    {" "}
                    <div className="p-10">
                        <h2 className="text-xl mb-2 ">Recent Donation Request</h2>
                        {data?.length < 0 ? <> Not Available recent donation request </> : <>  <DonationTable data={data} refetch={refetch}></DonationTable>
                            <div className="flex shrink-0 flex-col gap-2 mt-10 justify-center sm:flex-row">
                                <Link className='btn btn-outline' to="/dashboard/my-donation-request">
                                    view my all request
                                </Link>

                            </div>
                        </>}


                    </div>

                </>
            ) : (
                <></>
            )}
        </div>

    );
};

export default DonorHome;