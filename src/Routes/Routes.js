import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllProducts from "../Pages/AllItemsForUsers/AllProducts";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SellerSignUp from "../Pages/Login/UserSignUp/SellerSignUp";
import UserSignUp from "../Pages/Login/UserSignUp/UserSignUp";

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
            }
        ]
    }
])

export default router;