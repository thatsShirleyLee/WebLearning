import About from "../page/About";
import Home from "../page/Home";
import {Navigate} from "react-router-dom";
import React from "react";

export default [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/',
        element: <Navigate to='/about'/>
    }
]