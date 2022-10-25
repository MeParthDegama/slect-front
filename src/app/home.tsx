import React from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { increment } from '../state/counterSlices'

const HomePage = () => {
    /* const count = useAppSelector(state => state.counter.value) */
    const dispatch = useAppDispatch()
    const vPKA = useAppSelector(s => s.counter.value)

    const inc = () => {
        dispatch(increment())
    }

    return (
        <div>
            <h1>
                value: {vPKA}
            </h1>
            <button onClick={inc}>+</button>
        </div>
    )
}

export default HomePage
