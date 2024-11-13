import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { fetchEmployees } from '../../entities/employee/model/employee-slice';
import { EmployeeTable } from '../../shared/ui/employees-table';
import {SelectUI} from "../../shared/ui/select";
import {EmployeeFilter} from "../../features/employee-filter/ui/employee-filter.tsx";

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <SelectUI />
      <EmployeeFilter />
      <EmployeeTable />
    </div>
  );
};

