import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './pasteSlice'

export default configureStore({
  reducer: {
    paste: pasteReducer,
  },
})