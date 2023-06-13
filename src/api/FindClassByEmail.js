import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const FindClassByEmail = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
  
    const { refetch, data: findClassByEmail = [] } = useQuery(["myActiveClass", user?.email], async () => {
      const res = await axiosSecure.get(`/myActiveClass/${user?.email}`);
      return res.data;
    }, {
      enabled: !loading,
    });
  
    return [findClassByEmail, refetch];
};

export default FindClassByEmail;
