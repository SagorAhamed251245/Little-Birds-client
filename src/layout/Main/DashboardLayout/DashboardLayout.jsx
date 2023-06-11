import { Outlet } from "react-router-dom";
import DashboardNav from "../../../shared/DashboardNav/DashboardNav";

const DashboardLayout = () => {
    return (
        <div className="flex h-auto">
            <div className="w-[20%] h-full">
                <DashboardNav></DashboardNav>
            </div>
            <div className="w-[80%] h-full">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;