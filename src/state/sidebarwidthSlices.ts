import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './state'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 200
}

export const sidebarwidthSlices = createSlice({
  name: 'sidebarwidth',
  initialState,
  reducers: {
    change: (state, value) => {
      state.value = value.payload
    },
  }
})

export const { change } = sidebarwidthSlices.actions

export const sidebarWidth = (state: RootState) => state.counter.value
export default sidebarwidthSlices.reducer
