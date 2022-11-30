import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../Layouts/allUsers/AllUsers";
import Seller from "../Layouts/allUsers/Seller";
import Main from "../Layouts/Main";
import Secondary from "../Layouts/Secondary";
import About from "../Pages/About/About";
import AllProducts from "../Pages/AllItemsForUsers/AllProducts";
import Android from "../Pages/AllItemsForUsers/Android";
import Ios from "../Pages/AllItemsForUsers/Ios";
import Tablet from "../Pages/AllItemsForUsers/Tablet";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import ErrorHandle from "../Pages/ErrorHandle/ErrorHandle";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SellerSignUp from "../Pages/Login/UserSignUp/SellerSignUp";
import UserSignUp from "../Pages/Login/UserSignUp/UserSignUp";
import MyOrder from "../Pages/MyOrder/MyOrder";
import MySells from "../Pages/MySells/MySells";
import Report from "../Pages/Report/Report";
import SellerAddPhone from "../Pages/SellerAddPhone/SellerAddPhone";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import SellerRoute from "./SellerRoute/SelllerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/products',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/signup',
                element: <UserSignUp></UserSignUp>
            },
            {
                path: '/sellersignup',
                element: <SellerSignUp></SellerSignUp>
            },
            {
                path: '/addphone',
                element: <PrivateRoute><SellerAddPhone></SellerAddPhone></PrivateRoute>
            },
            {
                path: '/android',
                element: <Android></Android>
            },
            {
                path: '/ios',
                element: <Ios></Ios>
            },
            {
                path: '/tablet',
                element: <Tablet></Tablet>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/report',
                element: <Report></Report>
            }
        ]
    },
    {
        path: '/manage',
        element: <PrivateRoute><Secondary></Secondary></PrivateRoute>,
        children: [
            {
                path: '/manage',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/manage/mysells',
                element: <SellerRoute><MySells></MySells></SellerRoute>
            },
            {
                path: '/manage/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/manage/sellers',
                element: <AdminRoute><Seller></Seller></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorHandle></ErrorHandle>
    }
])

export default router;