import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";


const AllUser = () => {
    const {  loading } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: allUsers = [] } = useQuery({
        queryKey: ['allUsers'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/allUsers`)
           
            return res.data;
        },
    })

    return [allUsers, refetch]
};

export default AllUser;