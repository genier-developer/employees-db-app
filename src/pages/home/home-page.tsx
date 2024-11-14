import {FC, useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import {fetchEmployees} from '../../entities/employee/model/employee-slice';
import { EmployeeTable } from '../../shared/ui/employees-table';
import {Header} from "../../widgets/header/header.tsx";
import {EmployeeEditPage} from "../employee/employee-edit-page.tsx";

export const HomePage: FC = () => {
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false)
  const openAddEmployeeModal = () => setIsAddEmployeeModalOpen(true)
  const closeAddEmployeeModal = ()=> setIsAddEmployeeModalOpen(false)

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <Header onAddEmployeeClick={openAddEmployeeModal}/>
      <EmployeeEditPage isOpen={isAddEmployeeModalOpen} onClose={closeAddEmployeeModal}/>
      <EmployeeTable />
    </div>
  );
};

