// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import FindUser from "../../api/FindUers";
import {
  FaHome,
  FaBuromobelexperte,
  FaUserCog,
  FaArchive,
  FaBorderAll,
  FaBookOpen,
  FaCcAmazonPay,
} from "react-icons/fa";
import { AiOutlineAppstoreAdd, AiOutlineHome } from "react-icons/ai";

const DashboardNav = () => {
  const [UserByEmail] = FindUser();
  console.log(UserByEmail);
  let li;
  if (UserByEmail && UserByEmail.role === "admin") {
    console.log("role: admin");
    li = (
      <>
        <Link to={"dashboard"}>
          <FaHome className="text-2xl"></FaHome>
        </Link>
        <Link to={"manage-classes"}>
          <FaBuromobelexperte className="text-2xl"></FaBuromobelexperte>
        </Link>
        <Link to={"manage-users"}>
          <FaUserCog className="text-2xl"></FaUserCog>
        </Link>
      </>
    );
  } else if (UserByEmail && UserByEmail.role === "teacher") {
    console.log("role: teacher");
    li = (
      <>
        <Link to={"dashboard"}>
          <FaHome className="text-2xl"></FaHome>
        </Link>
        <Link to={"add-class"}>
          <AiOutlineAppstoreAdd className="text-2xl"></AiOutlineAppstoreAdd>
        </Link>
        <Link to={"my-class"}>
          <FaArchive className="text-2xl"></FaArchive>
        </Link>
      </>
    );
  } else if (UserByEmail && (UserByEmail.role == null || UserByEmail.role)) {
    console.log("role: student");
    li = (
      <>
        <Link to={"dashboard"}>
          <FaHome className="text-2xl"></FaHome>
        </Link>
        <Link to={"selected-class"}>
          <FaBorderAll className="text-2xl"></FaBorderAll>
        </Link>
        <Link to={"enrolled-class"}>
          <FaBookOpen className="text-2xl"></FaBookOpen>
        </Link>
        <Link to={"payment-history"}>
          <FaCcAmazonPay className="text-2xl"></FaCcAmazonPay>
        </Link>
      </>
    );
  }

  return (
    <div className="  flex flex-col w-full m-0 p-0 items-center justify-between">
      <ul className="menu min-h-screen justify-between  text-base-content  items-center bg-pink-200 ">
        
        {li}

        <div className="divider mt-60">OR</div>
        <Link to={"/"}>
          <AiOutlineHome className="text-2xl"></AiOutlineHome>
        </Link>
      </ul>
    </div>
  );
};

export default DashboardNav;
