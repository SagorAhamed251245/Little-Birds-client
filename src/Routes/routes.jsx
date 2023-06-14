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

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers";
import AddClass from "../pages/Dashboard/TeacherDashboard/AddClass";
import MyClass from "../pages/Dashboard/TeacherDashboard/MyClass";
import SelectedClasses from "../pages/Dashboard/StudentDashboard/SelectedClasses";
import PaymentPage from "../pages/Dashboard/StudentDashboard/PaymentPage";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoutes/AdminRoutes";
import TeacherRoutes from "./TeacherRoutes/TeacherRoutes";
import Teacher from "../api/teacher";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: < Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'class/:id',
                element:
                    <PrivateRoute>
                        <ClassDetails></ClassDetails>
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_apiUrl}/class/${params.id}`)

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
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: 'dashboard',
                element: <DashboardHome></DashboardHome>
            },

            {
                path: 'selected-class',
                element: <TeacherRoutes>
                    <SelectedClasses></SelectedClasses>
                </TeacherRoutes>,

            },

            {
                path: 'payment/:id',
                element: <TeacherRoutes>
                    <PaymentPage></PaymentPage>
                </TeacherRoutes>
            },


            {
                path: 'enrolled-class',
                element: <TeacherRoutes>
                    <EnrolledClasses></EnrolledClasses>
                </TeacherRoutes>
            },
            {
                path: 'payment-history',
                element: <TeacherRoutes>
                    <PaymentHistory></PaymentHistory>
                </TeacherRoutes>
            },

            // student dashboard END
            // admin dashboard starting 
            {
                path: 'manage-classes',
                element:<AdminRoute>
                    <ManageClasses></ManageClasses>
                </AdminRoute>
                    


            },
            {
                path: 'manage-users',
                element: <AdminRoute>
                    <ManageUsers></ManageUsers>
                </AdminRoute>

            },
            // admin dashboard ending
            // teacher dashboard starting
            {
                path: 'add-class',
                element: <AddClass></AddClass>


            },
            {
                path: 'my-class',
                element: <MyClass></MyClass>
            },
            
            
            // teacher dashboard end

        ]
    }
]);