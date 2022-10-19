import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Register from '../components/Register/Register.jsx';
import Login from '../components/LogIn/Login.jsx'
import CardDetails from "../components/CardDetail/CardDetails";
import PrivateRoutes from "./PrivateRoutes";
import About from "../components/About/About";

export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/home',
                element: <Home />
            },
            {
                path:'/booking',
                element: <div>This Router</div>
            },
            {
                path:'/:id',
                element:<PrivateRoutes> <CardDetails /></PrivateRoutes>
            },
            {
                path:'/register',
                element: <Register />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/about',
                element:<PrivateRoutes><About /></PrivateRoutes>
            }
        ]
    }
])