import {createBrowserRouter} from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./pages/page-error.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
]);