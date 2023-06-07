import { Outlet } from "react-router-dom";
import DashboardNav from "../../../shared/DashboardNav/DashboardNav";

const DashboardLayout = () => {
    return (
        <div>
           <DashboardNav></DashboardNav>
           <Outlet></Outlet>
        
        </div>
    );
};

export default DashboardLayout;