import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import Toys from "../pages/Toys";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ToyDetails from "../pages/ToyDetails";
import ErrorPage from "../pages/ErrorPAge";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/toys",
        element: <Toys></Toys>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },

      {
        path: "/toy/:toyId",
        element: <ToyDetails></ToyDetails>,
      },
    ],
  },
]);
