import {useAppDispatch, useAppSelector} from "../app/store.ts";
import {useEffect} from "react";
import {fetchEmployees} from "../entities/employee/model/employee-slice.ts";

export const HomePage = () => {
  const dispatch  = useAppDispatch()
  const {employees, loading, error} = useAppSelector(state => state.employee)

  useEffect(()=>{
    dispatch(fetchEmployees())
  }, [dispatch])

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>

  return (
    <div>
      {employees.map(employee => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>
          <p>{employee.phone}</p>
        </div>
      ))}

    </div>
  )
}

