// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";


const DashboardNav = () => {
    // const li = <>
    //     <li><Link to={'/'}></Link></li>
    //     <li><Link to={'admin-home'}>admin-home</Link></li>
    //     <li><Link to={'teacher-home'}>teacher-home</Link></li>
    //     <li><Link to={'student-home'}>student-home</Link></li>



    // </>
    const userLinks = <>
        <Link to={'dashboard'}>Dashboard Home</Link>
        <Link to={'selected-class'}>Selected Class</Link>
        <Link to={'enrolled-class'}>Enrolled-class</Link>
        <Link to={'payment-history'}>Payment-history</Link>
    </>
    const adminLinks = <>
        <Link to={'dashboard'}>Dashboard Home</Link>
        <Link to={'selected-class'}>Manage Classes</Link>
        <Link to={'enrolled-class'}>Manage Users</Link>
        
    </>

    const instructorLinks = <>
        <Link to={'dashboard'}>Dashboard Home</Link>
        <Link to={'add-class'}>Add a Class</Link>
        <Link to={'my-class'}>My Classes</Link>
        <Link to={'enrolled-history'}>Enrolled Students</Link>
        <Link to={'feedback-status'}>Feedback</Link>
    </>
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content gap-10 items-center bg-pink-200">
                    {/* Sidebar content here */}
                    {userLinks}

                    <div className="divider mt-60">OR</div>
                    <Link to={'/'}>Home</Link>
                </ul>


            </div>

        </div>
    );
};

export default DashboardNav;