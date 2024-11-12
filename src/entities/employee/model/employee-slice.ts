import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EmployeeResponseData} from "./types.ts";

export type EmployeeState = {
  employees: EmployeeResponseData[],
  error: string | null,
  loading: boolean,
}

const initialState: EmployeeState = {
  employees: [],
  error: null,
  loading: false,
}

export const fetchEmployees = createAsyncThunk('employee/fetchEmployees', async ()=>{
  const response = await fetch('/db/employees.json')
  if(!response.ok){
    throw new Error("failed to fetch Employees from DB")
  }
  return await response.json()
})
export const employeeSlice = createSlice({
  name: "employee",
  initialState,
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
  },
  extraReducers: (builder)=>{
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<EmployeeResponseData[]>) => {
        state.employees = action.payload
        state.loading = false
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch Employees from DB"
      })
  }
})

export const {addEmployee, updateEmployee, employeeToggleArchiveStatus} = employeeSlice.actions;
export default employeeSlice.reducer