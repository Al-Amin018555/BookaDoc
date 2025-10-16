import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [

        {
            index: true,
            loader: () => fetch('doctorsData.json'),
            Component: Home,
        },
        {
          path:'doctorDetails',
          Component: DoctorDetails,
        }
    ],
  },
]);