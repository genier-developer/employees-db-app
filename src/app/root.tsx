import {Outlet} from 'react-router-dom';

export default function Root()  {
  return (
    <div>
      <h1>Hello, there is an employee-app</h1>
      <Outlet/>
    </div>
  )
}

