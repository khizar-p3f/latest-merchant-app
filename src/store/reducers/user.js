import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile:{},
  isLoggedin: false,
  isProfileCreated: false,
  isAggregatorAdded: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        isLoggedin: true,
        authID:action.payload.sub,
        ...action.payload
      }
    },
    updateProfile: (state, action) => {
      return {
        ...state,
        profile:action.payload,
        isProfileCreated: true,
        id:action.payload.id,
        ...action.payload
      }
    },

  },
})
// Action creators are generated for each case reducer function
export const { updateUser, updateProfile } = userSlice.actions

export default userSlice.reducer