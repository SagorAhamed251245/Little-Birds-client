import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const useCart = () => {
    const { user, loading } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/userBookings/${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCart;