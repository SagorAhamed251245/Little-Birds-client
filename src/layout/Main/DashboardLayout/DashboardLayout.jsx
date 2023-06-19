import { Outlet } from "react-router-dom";
import DashboardNav from "../../../shared/DashboardNav/DashboardNav";

const DashboardLayout = () => {
    return (
        <div className="flex h-auto ">
            <div className="w-[5%] m-0 p-0 min-h-screen bg-pink-200 fixed ">
                <DashboardNav></DashboardNav>
            </div>
            <div className="w-[95%] ml-[5%] min-h-screen justify-center items-center flex h-full ">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;