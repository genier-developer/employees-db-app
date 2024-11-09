import {Outlet} from 'react-router-dom';
import {HomePage} from "../pages/home-page.tsx";

export default function Root()  {
  return (
    <div>
      <header>Hello, there is an employee-app</header>
      <HomePage/>
      <Outlet/>
    </div>
  )
}

