import {useAppDispatch, useAppSelector} from "../../app/store.ts";
import {useEffect} from "react";
import {fetchEmployees} from "../../entities/employee/model/employee-slice.ts";
import {Checkbox} from "../../shared/ui/checkbox/checkbox.tsx";
import s from './home.module.scss'

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const {employees, loading, error} = useAppSelector(state => state.employee)

  useEffect(()=>{
    dispatch(fetchEmployees())
  }, [dispatch])

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>

  return (
    <div className={s.home}>
      {employees.map(employee => (
        <div key={employee.id} className={s.employee}>
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>
          <p>{employee.phone}</p>
          <Checkbox isArchive={employee.isArchive} />
        </div>
      ))}
    </div>
  )
}

