import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './state'

interface TokenState {
  token: string
}

const initialState: TokenState = {
  token: ""
}

export const tokenSlices = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    }
  }
})

export const { setToken } = tokenSlices.actions

export const selectCount = (state: RootState) => state.counter.value
export default tokenSlices.reducer
