import {createSlice} from "@reduxjs/toolkit";
import {EmployeeResponseData} from "./types.ts";

export type EmployeeState = {
  employees: EmployeeResponseData[],
}

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {} as EmployeeState,
  reducers: {}
})