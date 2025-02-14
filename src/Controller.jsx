import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Landing from "./pages/Landing.jsx";
import Login from './pages/Login.jsx';
import Register from "./pages/Register.jsx";

export default function Controller() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>}></Route>
                    <Route path="/auth/sign_in" element={<Login/>}></Route>
                    <Route path="/auth/create_account" element={<Register/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
