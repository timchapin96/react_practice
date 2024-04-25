import { createSlice } from '@reduxjs/toolkit'


//Create slice for Redux store
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },
  reducers: {}
})

export const usersReducer = usersSlice.reducer
