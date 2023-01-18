import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {SideBar, SideBarExp} from "../components/sidebar";
import HomePage from "./home";
import NotFound from "./notFound";

const MainApp = () => {

    useEffect(() => {
        alert()
    }, [])

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
