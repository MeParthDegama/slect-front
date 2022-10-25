import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../state/hooks";
import {decrement} from "../state/counterSlices" 

const AboutPage = () => {
    const d = useAppDispatch()
    return(
        <div>
            <Link to="/about">Sec 1</Link>
            <Link to="/about/2">Sec 2</Link>

            <Routes>
                <Route path='/' element={<h1>Hello Worl</h1>} />
                <Route path='/2' element={<div>
                    <button onClick={() => d(decrement())}>
                        -
                    </button>
                </div>} />
            </Routes>
        </div>
    )
}

export default AboutPage
