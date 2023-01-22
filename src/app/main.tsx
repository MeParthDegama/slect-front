import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { SideBar, SideBarExp } from "../components/sidebar";
import hostName from "../conf/hostName";
import LoadLine from "../elements/loadline";
import HomePage from "./home";
import NotFound from "./notFound";

const MainApp = () => {

    let authLock = useRef(false)
    let [authComp, setAuthComp] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

        // useEffect is execute two time than fix to use useRef
        if (!authLock.current) {
            authLock.current = true
            return
        }

        const cookie = new Cookies()
        let token = cookie.get("TOKEN")

        // if token is null
        if (!token) {
            navigate("/login")
            return
        }

        // auth token
        setTimeout(() => {
            
        }, 1000);

    }, [])

    return authComp ? <AppMainPart /> : <AppAuthScreen />

}

const AppAuthScreen = () => {
    return (
        <div className="loading-screen">
            <div className="host-title">
                {hostName}
            </div>
            <div className="loading">
                Loading...
            </div>
            <div className="loading-line">
                <LoadLine />
            </div>
        </div>
    )
}

const AppMainPart = () => {
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
