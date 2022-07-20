import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  vendors: {
    isLoaded: false,
    data: []
  }
}

export const merchantSlice = createSlice({
  name: 'merchants',
  initialState,
  reducers: {
    getPaymentsVendors: (state, action) => {
      return {
        ...state,
        vendors: {
          isLoaded: true,
          data: action.payload
        }
      }
    },
  },
})
// Action creators are generated for each case reducer function
export const { getPaymentsVendors } = merchantSlice.actions

export default merchantSlice.reducer