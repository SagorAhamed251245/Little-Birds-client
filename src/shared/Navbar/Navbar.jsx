import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Button from "../../component/Button/Button";
import logo1 from '../../assets/logo1.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const li = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'instructors'}>Instructors</Link></li>
        <li><Link to={'classes'}>Classes</Link></li>
        <li><Link to={'/dashboard/dashboard'}>dashboard</Link></li>





    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {li}
                    </ul>
                </div>
                <img className="w-10" src={ logo1} alt="" />
                <p className="normal-case text-2xl ml-2 font-bold mr-2">Little Birds</p>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {li}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <>
                        <div className="mr-2" onClick={logOut}>
                            <Button title={'Log Out'} ></Button>
                        </div>
                        <div className="avatar">
                            <div className="w-10 mask mask-squircle text-black">
                                <img src={user?.photoURL} />

                            </div>
                        </div></> :
                        <>
                            <Link className="mr-2" to={'login'}><Button title={'Login'} ></Button></Link>
                            <Link to={'register'}><Button title={'Register'} ></Button></Link>
                        </>
                }


            </div>
        </div>
    );
};

export default Navbar;