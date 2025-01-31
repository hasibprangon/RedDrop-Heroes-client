import React, { useEffect, useState } from 'react';
import useUserdata from './useUserdata';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin = false, isLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            return res?.data?.admin;
        }
    })

    return [isAdmin, isLoading]
};

export default useAdmin;