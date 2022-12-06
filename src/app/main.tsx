import React from "react";
import { Route, Routes } from "react-router-dom";
import {SideBar, SideBarExp} from "../components/sidebar";
import HomePage from "./home";
import Login from "./login";
import NotFound from "./notFound";

const MainApp = () => {
    return (
        <div className="app">
            <SideBar />
            <SideBarExp />
            <div className="main-con">
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/files' element={<HomePage />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default MainApp
