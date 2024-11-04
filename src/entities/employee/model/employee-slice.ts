import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EmployeeResponseData} from "./types.ts";

export type EmployeeState = {
  employees: EmployeeResponseData[],
}

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {} as EmployeeState,
  reducers: {
    addEmployee: (state, action: PayloadAction<EmployeeResponseData>) => {
      state.employees.push(action.payload)
    },
    updateEmployee: (state, action: PayloadAction<EmployeeResponseData>) => {
      const index = state.employees.findIndex(employee => employee.id === action.payload.id)
      if (index !== -1) {
        state.employees[index] = action.payload
      }
    },
    deleteEmployee: (state, action: PayloadAction<number>) => {
      state.employees.filter(employee => employee.id !== action.payload)
    },
    employeeToggleArchiveStatus: (state, action: PayloadAction<number>) => {
      const employee = state.employees.find(employee => employee.id === action.payload)
      if (employee) {
        employee.isArchive = !employee.isArchive
      }
    }
  }
})
export const {addEmployee, updateEmployee} = employeeSlice.actions;
export default employeeSlice.reducer