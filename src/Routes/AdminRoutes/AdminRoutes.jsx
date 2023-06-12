
import { useContext } from "react";

import { Navigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import FindUser from "../../api/FindUers";



const AdminRoute = ({ children }) => {
    const {  loading } = useContext(AuthContext);
    const [UserByEmail]= FindUser()
    console.log(UserByEmail);
    

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if (UserByEmail.role === 'admin') {
        return children;
    }
    return <Navigate to="/login"  replace></Navigate>
};

export default AdminRoute;