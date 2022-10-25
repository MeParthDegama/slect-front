import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home";
import NotFound from "./notFound";

const MainApp = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/files' element={<HomePage />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default MainApp
