import DashboardSidebar from "@/pages/Dashboard/DashboardSidebar";
import { HomeIcon } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
      <div>
        <DashboardSidebar/>
        <Link to={"/"}>
          <HomeIcon className="w-6 h-6 text-white m-2"/>
        </Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
