import { configureStore } from '@reduxjs/toolkit'
import userGoalsSlice from './userGoalsSlice'
export const store = configureStore({
  reducer: {
    userGoalsSlice
  },
})