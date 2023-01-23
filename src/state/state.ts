import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlices"
import notifySlices from "./notifySlices"
import profileSlices from "./ProfileSlices"
import sidebarwidthSlices from "./sidebarwidthSlices"
import tokenSlices from "./TokenSlices"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        sidebarwidth: sidebarwidthSlices,
        notify: notifySlices,
        profile: profileSlices,
        token: tokenSlices
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
