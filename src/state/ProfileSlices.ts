import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './state'

interface ProfileState {
  username: string,
  fullname: string
}

const initialState: ProfileState = {
  username: "",
  fullname: ""
}

export const profileSlices = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileState>) => {
      state.username = action.payload.username
      state.fullname = action.payload.fullname
    }
  }
})

export const { setProfile } = profileSlices.actions
export type {ProfileState}

export const selectCount = (state: RootState) => state.counter.value
export default profileSlices.reducer
