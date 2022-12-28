import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './state'

interface NotifyState {
  nextId: number,
  notifes: [JSX.Element | undefined],
  addNew: boolean
}

const initialState: NotifyState = {
  nextId: 0,
  notifes: [undefined],
  addNew: true
}

export const NotifySlice = createSlice({
  name: 'Notify',
  initialState,
  reducers: {
    addNotify: (state, value) => {
      state.notifes.push(value.payload)
    }
  }
})

export const { addNotify } = NotifySlice.actions

export const selectCount = (state: RootState) => state.notify.notifes
export default NotifySlice.reducer
