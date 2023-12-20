import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Dashboard from "./components/views/Dashboard/Dashboard";
import Login from "./components/views/Login/Login";
import Signup from "./components/views/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  //   {
  //     path: "/",
  //     element: <GuestLayout />,
  //     children: [

  //     ],
  //   },
]);

export default router;
