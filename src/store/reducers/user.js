import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedin: false,
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        isLoggedin: true,
        user: action.payload
      }
    },
  },
})
// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions

export default userSlice.reducer