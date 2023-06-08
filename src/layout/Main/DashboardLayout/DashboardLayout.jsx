import { Outlet } from "react-router-dom";
import DashboardNav from "../../../shared/DashboardNav/DashboardNav";

const DashboardLayout = () => {
    return (
        <div className="flex">
            <div className="">
                <DashboardNav></DashboardNav>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;