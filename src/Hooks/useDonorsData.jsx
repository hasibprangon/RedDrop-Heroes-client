import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useDonorsData = () => {
        const axiosSecure = useAxiosSecure();
        const {data: donors , isLoading, refetch} = useQuery({
            queryKey:['donors'],
            queryFn: async() => {
               const res = await axiosSecure.get('/donors')
               return res?.data;
            }
        })
    return [donors, isLoading, refetch];
};

export default useDonorsData;