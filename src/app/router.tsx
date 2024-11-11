import {createBrowserRouter} from "react-router-dom";
import {ErrorPage} from "../pages/error/error-page.tsx";
import {EmployeeEditPage} from "../pages/employee/employee-edit-page.tsx";
import Root from "./root.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/employee/:id/edit',
        element: <EmployeeEditPage/>
      },
      {
        path: '*',
        element: <ErrorPage/>
      }
    ]
  }
]);