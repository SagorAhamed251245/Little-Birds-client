import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Button from "../../component/Button/Button";
import { FaEye } from 'react-icons/fa';



import { setNewUser } from "../../api/setUserAuth";

const Login = () => {
    const [hidden, setHidden] = useState(true)
const [error, setError] = useState('')
    const { register, handleSubmit } = useForm();
    const location = useLocation()
    const navigate = useNavigate()

    const { singInUser, singinWithGoogle } = useContext(AuthContext)

    // singUP user
    const onSubmit = data => {

        const { email, password } = data;
        singInUser(email, password)
            .then(result => {
                console.log(result.user);
                setNewUser(result.user)
                navigate('/')
            })
            .catch(error => {
                setError(error.message);
            })


    };
    const handelGoogleSingin = () => {
        singinWithGoogle()
            .then(result => {
                setNewUser(result.user);

                 { location.state?.from?.pathname ? navigate(location.state.from.pathname) : navigate('/') }
                
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <>
            <div className='flex items-center w-full h-[100vh] justify-center'>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 " >
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Login to our platform</h5>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" {...register("email")}

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your name" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type={hidden ? 'password' : 'text'} {...register("password")}
                                autoComplete="on"

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            <FaEye onClick={() => setHidden(!hidden)}></FaEye>

                        </div>

                        <Button title={'Login'}></Button>

                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Create a new account <Link state={location} to='/register' className="text-pink-500 hover:underline dark:text-pink-500">register</Link>
                        </div>

                    </form>
                    <div className=' mb-1 w-10/12 mx-auto'>
                        <button onClick={handelGoogleSingin} className="w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                            SingUp With Google</button>

                    </div>
                    <p className="text-red-500 text-sm">{error}</p>
                </div>
            </div>
        </>
    );
};

export default Login;