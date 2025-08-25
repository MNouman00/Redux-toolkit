import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counter.slice.jsx'

export const store = configureStore({
  reducer: { 
    counter: counterReducer
  },
})
