import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyAllClass = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myAllClass = [] } = useQuery({
        queryKey: [`MyClass`, user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/MyClass/${user?.email}`)
           
            return res.data;
        },
    })

    return [myAllClass, refetch]
};

export default MyAllClass;