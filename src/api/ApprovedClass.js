import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const ApprovedClass = () => {
   
        const { user, loading } = useContext(AuthContext);
    
        const [axiosSecure] = useAxiosSecure();
        const { refetch, data: approvedClass = [] } = useQuery({
            queryKey: ['approvedClass', user?.email],
            enabled: !loading,
            queryFn: async () => {
                const res = await axiosSecure(`/approvedClass`)
               
                return res.data;
            },
        })
    
        return [approvedClass, refetch]
    
    
};

export default ApprovedClass;

