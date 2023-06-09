import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from "../provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_apiUrl}`,
})
const useAxiosSecure = () => {
   
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem('access-token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        })
        axiosSecure.interceptors.response.use(
            response => response,
            async error => {
                if (
                    error.response &&
                    (error.response.status === 401 || error.response.status === 403)
                ) {
                    await logOut()
                    navigate('/login')
                }
                return Promise.reject(error)
            }
        )
    }, [logOut, navigate, axiosSecure])

    return [axiosSecure]
};

export default useAxiosSecure;