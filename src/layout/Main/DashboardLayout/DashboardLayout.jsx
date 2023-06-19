import { Outlet } from "react-router-dom";
import DashboardNav from "../../../shared/DashboardNav/DashboardNav";

const DashboardLayout = () => {
    return (
        <div className="flex h-auto">
            <div className="w-[5%] m-0 p-0 h-[200vh]">
                <DashboardNav></DashboardNav>
            </div>
            <div className="w-[80%] h-full">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;