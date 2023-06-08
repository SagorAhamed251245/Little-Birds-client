
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const FindUser = () => {
    const {user, loading} = useContext(AuthContext);
    const [UserByEmail, setUserByEmail] = useState([])

    useEffect(()=> {
        if(!loading){
            fetch(`${import.meta.env.VITE_apiUrl}/users/${user?.email}`)
        .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserByEmail(data)
                
            })
        }
    }, [user, loading])

   
    return [UserByEmail]
}
export default FindUser;