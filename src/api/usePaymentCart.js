import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const usePaymentCart = () => {
    const { user, loading } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: paymentCart = [] } = useQuery({
        queryKey: ['paymentCarts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/userPayments/${user?.email}`)
            
            return res.data;
        },
    })

    return [paymentCart, refetch]

}
export default usePaymentCart;