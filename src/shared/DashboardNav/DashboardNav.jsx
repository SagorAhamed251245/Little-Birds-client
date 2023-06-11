// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import FindUser from "../../api/FindUers";


const DashboardNav = () => {
    const [UserByEmail] = FindUser()
    console.log(UserByEmail);
    let li
    if (UserByEmail && UserByEmail.role === 'admin') {
        console.log("role: admin");
        li = (
          <>
            <Link to={'dashboard'}>Dashboard Home</Link>
            <Link to={'manage-classes'}>Manage Classes</Link>
            <Link to={'manage-users'}>Manage Users</Link>
          </>
        );
      } else if (UserByEmail && UserByEmail.role === 'teacher') {
        console.log("role: teacher");
        li = (
          <>
            <Link to={'dashboard'}>Dashboard Home</Link>
            <Link to={'add-class'}>Add a Class</Link>
            <Link to={'my-class'}>My Classes</Link>
            <Link to={'enrolled-history'}>Enrolled Students</Link>
            <Link to={'feedback-status'}>Feedback</Link>
          </>
        );
      } else if (UserByEmail && (UserByEmail.role == null || UserByEmail.role)) {
        console.log("role: student");
        li = (
          <>
            <Link to={'dashboard'}>Dashboard Home</Link>
            <Link to={'selected-class'}>Selected Class</Link>
            <Link to={'enrolled-class'}>Enrolled-class</Link>
            <Link to={'payment-history'}>Payment-history</Link>
          </>
        );

        }



    return (
        <div className="drawer lg:drawer-open h-full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side h-full">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu h-[120vh] p-4 w-80   text-base-content gap-10 items-center bg-pink-200 ">
                    {/* Sidebar content here */}
                    {li}

                    <div className="divider mt-60">OR</div>
                    <Link to={'/'}>Home</Link>
                </ul>


            </div>

        </div>
    );
};

export default DashboardNav;