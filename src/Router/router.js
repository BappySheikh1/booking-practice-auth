import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Register from '../components/Register/Register.jsx';
import Login from '../components/LogIn/Login.jsx'

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
                path:'/booking/:id',
                element: <div>This Router</div>
            },
            {
                path:'/register',
                element: <Register />
            },
            {
                path:'/login',
                element: <Login />
            },
        ]
    }
])