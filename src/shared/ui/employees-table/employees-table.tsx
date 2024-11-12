import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {EmployeeResponseData} from "../../../entities/employee/model/types.ts";
import {CheckboxUI} from "../checkbox";
import {useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {useCallback} from "react";
import {employeeToggleArchiveStatus} from "../../../entities/employee/model/employee-slice.ts";

export const EmployeeTable = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employee.employees);

  const handleToggleStatus = useCallback((employeeId: number) => {
    dispatch(employeeToggleArchiveStatus(employeeId));
  }, [dispatch]);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'name', headerName: 'Name', editable: true, flex: 1 },
    { field: 'role', headerName: 'Role', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'birthday', headerName: 'Birthday',editable: true, flex: 1 },
    {
      field: 'isArchive',
      headerName: 'Archived',
      width: 110,
      renderCell: (params) => (
        <CheckboxUI
          isArchive={params.value}
          onChangeChecked={() => handleToggleStatus(params.row.id)}
        />
      ),
    },
  ];

  const rows = employees.map((employee: EmployeeResponseData) => ({
    id: employee.id,
    name: employee.name,
    role: employee.role,
    phone: employee.phone,
    birthday: employee.birthday,
    isArchive: employee.isArchive,
  }));

  return (
    <Box sx={{width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
      />
    </Box>
  );
}