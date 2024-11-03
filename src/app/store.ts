import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {employeeSlice} from '../entities/employee/api/employee-slice.ts'

const reducer = combineReducers({
  employee: employeeSlice.reducer,
})
export const store = configureStore({
  reducer: {
    reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch