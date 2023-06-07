import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/Main/Main";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Registe";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layout/Main/DashboardLayout/DashboardLayout";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import TeacherDashboard from "../pages/Dashboard/TeacherDashboard/TeacherDashboard";
import StudentDashboard from "../pages/Dashboard/StudentDashboard/StudentDashboard";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
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
                path: 'admin-home',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: 'teacher-home',
                element: <TeacherDashboard></TeacherDashboard>
            },
            {
                path:'student-home',
                element: <StudentDashboard></StudentDashboard>
            }

        ]
    }
  ]);