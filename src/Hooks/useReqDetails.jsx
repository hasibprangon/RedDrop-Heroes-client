import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useReqDetails = () => {
    const params = useParams()
    const axiosPublic = useAxiosPublic();
    const {data: details = {}, refetch} = useQuery({
        queryKey:['details'],
        queryFn: async() =>{
          const res = await axiosPublic.get(`/request/${params.id}`)
          return res?.data;
        }
    })
    return {details, refetch}
};

export default useReqDetails;