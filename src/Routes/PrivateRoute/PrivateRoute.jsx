
import { useContext } from "react";

import { Navigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login"  replace></Navigate>
};

export default PrivateRoute;