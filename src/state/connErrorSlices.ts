import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './state'

interface CounterState {
    error: boolean
}

const initialState: CounterState = {
    error: false
}

export const connErrorSlices = createSlice({
    name: 'connError',
    initialState,
    reducers: {
        setConnError: state => {
            state.error = true
        },

        unSetConnError: state => {
            state.error = false
        }
    }
})

export const { setConnError, unSetConnError } = connErrorSlices.actions

export const selectCount = (state: RootState) => state.counter.value
export default connErrorSlices.reducer
