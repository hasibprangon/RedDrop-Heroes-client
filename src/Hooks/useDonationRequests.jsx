import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useDonationRequests = ({ email, page, limit, status }) => {
    const axiosPublic = useAxiosPublic();

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['donationRequests', email, page, limit, status],
        queryFn: async () => {
            const response = await axiosPublic.get(`/requests/${email}`, {
                params: { page, limit, status }, 
            });
            return response.data; 
        },
        enabled: !!email,
    });

    return { 
        data: data?.requests || [], 
        total: data?.total || 0, 
        isLoading, 
        isError,
        refetch
    };
};

export default useDonationRequests;
