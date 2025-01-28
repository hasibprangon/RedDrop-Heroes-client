import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUserdata = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    
    const {data: userInfo, isLoading, refetch} = useQuery({
        queryKey: ['user'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/user/${user?.email}`)
            return res?.data;
        }
    })
    return [userInfo, isLoading, refetch]
};

export default useUserdata;