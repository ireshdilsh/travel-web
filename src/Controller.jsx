import React from 'react'
import Landing from "./pages/Landing.jsx";
import Login from './pages/Login.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register.jsx";
//import Login from './pages/Login.jsx';

export default function Controller() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>}></Route>
                    <Route path="/auth/sign%in" element={<Login/>}></Route>
                    <Route path="/auth/create%account" element={<Register/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
