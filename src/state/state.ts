import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlices"
import sidebarwidthSlices from "./sidebarwidthSlices"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        sidebarwidth: sidebarwidthSlices
    }
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
