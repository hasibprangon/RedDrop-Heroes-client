import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useProfile = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: profile = {}, isLoading, refetch}  = useQuery({
        queryKey: ['profile', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/user/${user?.email}`)
            return res?.data;
        }
    })
    return {profile, isLoading, refetch}
};

export default useProfile;