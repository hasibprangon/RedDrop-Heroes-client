import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useRequest = () => {
    const axiosPublic = useAxiosPublic();

    const {data: request = []} = useQuery({
        queryKey: ["request"],
        queryFn: async() =>{
            const res = await axiosPublic.get('/request')
            return res?.data;
        }
    })
    return [request];
   
};

export default useRequest;