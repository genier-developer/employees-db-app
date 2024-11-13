import {Outlet} from 'react-router-dom';
import {HomePage} from "../pages/home/home-page.tsx";

export default function Root()  {
  return (
    <div>
      <HomePage/>
      <Outlet/>
    </div>
  )
}

