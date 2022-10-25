import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const AboutPage = () => {
    return(
        <div>
            <Link to="/about">Sec 1</Link>
            <Link to="/about/2">Sec 2</Link>

            <Routes>
                <Route path='/' element={<h1>Hello Worl</h1>} />
                <Route path='/2' element={<h2>H sffgvi</h2>} />
            </Routes>
        </div>
    )
}

export default AboutPage
