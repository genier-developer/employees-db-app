import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { fetchEmployees } from '../../entities/employee/model/employee-slice';
import { EmployeeTable } from '../../shared/ui/employees-table';
import {SelectUI} from "../../shared/ui/select";
import {Header} from "../../widgets/header/header.tsx";

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
      <Header/>
      <SelectUI />
      <EmployeeTable />
    </div>
  );
};

