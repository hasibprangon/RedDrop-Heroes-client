import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useVolunteer = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isVolunteer = false, isPending: isVolunteerLoading, refetch} = useQuery({
        queryKey:[user?.email, 'isVolunteer'],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure.get(`/user/volunteer/${user?.email}`)
            return res?.data?.volunteer;
        }
    })
    return [isVolunteer, isVolunteerLoading, refetch]
};

export default useVolunteer;