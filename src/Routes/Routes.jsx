import { createBrowserRouter } from "react-router-dom";
import Default from "../Layout/Default/Default";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Search from "../Pages/Search/Search";
import Error from "../Shared/Error";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Pages/Dashboard/Profile";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import CreateDonationRequest from "../Pages/Dashboard/Donor/CreateDonationRequest";
import DonationRequests from "../Pages/DonationRequests/DonationRequests ";
import DonationRequestDetails from "../Pages/DonationRequests/DonationRequestDetails";
import MyDonationRequests from "../Pages/Dashboard/Donor/MyDonationRequests";
import UpdateDonationRequest from "../Pages/Dashboard/Donor/UpdateDonationRequest";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AllBloodDonationRequests from "../Pages/Dashboard/Admin/AllBloodDonationRequests";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default></Default>,
        errorElement: <Error></Error>,
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
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/donationRequests',
                element:<DonationRequests></DonationRequests>
            },
            {
                path:'/donationRequestDetails/:id',
                element: <PrivateRoutes><DonationRequestDetails></DonationRequestDetails></PrivateRoutes>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'',
                element:<DashboardHome></DashboardHome>
            },
            {
                path:"create-donation-request",
                element:<CreateDonationRequest></CreateDonationRequest>
            },
            {
                path:'my-donation-request',
                element:<MyDonationRequests></MyDonationRequests>
            },
            {
                path:'profile',
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path:'updateDonation/:id',
                element:<UpdateDonationRequest></UpdateDonationRequest>
            },
            {
                path: 'all-users',
                element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path:'all-blood-donation-request',
                element:<AdminRoutes><AllBloodDonationRequests></AllBloodDonationRequests></AdminRoutes>
            }
        ]
    }
])