import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './Notes'

export const store = configureStore({
  reducer: {
    notes: notesReducer
  }
})
