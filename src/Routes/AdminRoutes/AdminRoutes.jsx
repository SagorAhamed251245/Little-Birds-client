import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import FindUser from "../../api/FindUers";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import { Navigate } from "react-router-dom";






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
    return <Navigate to="/"  replace></Navigate>
};

export default AdminRoute;