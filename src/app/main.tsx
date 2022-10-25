import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./about";
import Header from "./header";
import HomePage from "./home";

const MainApp = () => {
    return (
        <div>
            <Header />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about/*' element={<AboutPage />} />
            </Routes>

        </div>
    )
}

export default MainApp
