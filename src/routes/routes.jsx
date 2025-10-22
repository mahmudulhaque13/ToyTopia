import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import Toys from "../pages/Toys";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
    ],
  },
]);
