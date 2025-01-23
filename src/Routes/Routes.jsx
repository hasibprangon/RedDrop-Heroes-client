import { createBrowserRouter } from "react-router-dom";
import Default from "../Layout/Default/Default";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Search from "../Pages/Search/Search";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default></Default>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/search',
                element:<Search></Search>
            }
        ]
    }
])