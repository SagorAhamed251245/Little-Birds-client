import { useContext } from "react";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import FindUser from "../../api/FindUers";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const TeacherRoutes = ({children}) => {
    const {  loading } = useContext(AuthContext);
    const [UserByEmail]= FindUser()
    console.log(UserByEmail);
    

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if (UserByEmail.role === 'teacher') {
        return children;
    }
    return <Navigate to="/"  replace></Navigate>
};

export default TeacherRoutes;