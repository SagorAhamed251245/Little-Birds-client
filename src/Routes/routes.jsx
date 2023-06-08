import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/Main/Main";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Registe";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layout/Main/DashboardLayout/DashboardLayout";

import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import ClassDetails from "../pages/ClassDetails/ClassDetails";

import EnrolledClasses from "../pages/Dashboard/StudentDashboard/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/StudentDashboard/PaymentHistory";
import SelectedClasses from "../pages/Dashboard/StudentDashboard/selectedClasses";
import DashboardHome from "../pages/Dashboard/DashboardHome";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: 'instructors',
            element:< Instructors></Instructors>
        },
        {
            path: 'classes',
            element:<Classes></Classes>
        },
        {
            path: 'class/:id',
            element: <ClassDetails></ClassDetails>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_apiUrl}/class/${params.id}`)
            
        }
      ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'selected-class',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: 'enrolled-class',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path:'payment-history',
                element:<PaymentHistory></PaymentHistory>
            }
            // student dashboard


        ]
    }
  ]);