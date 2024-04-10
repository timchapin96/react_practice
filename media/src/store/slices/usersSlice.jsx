import { createSlice } from '@reduxjs/toolkit'


//Create slice for Redux store
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: []
  },
  reducers: {}
})

export const usersReducer = usersSlice.reducer
