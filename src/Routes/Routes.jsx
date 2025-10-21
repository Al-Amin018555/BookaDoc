import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import Appointments from "../Pages/Appointments/Appointments";
import Blogs from "../Pages/Blogs/Blogs";

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
        path: 'doctorDetails/:doctorId',
        loader: () => fetch('doctorsData.json'),
        Component: DoctorDetails,
      },
      {
        path: 'appointments',
        loader: () => fetch('doctorsData.json'),
        Component: Appointments,
      },
      {
        path: 'blogs',
        loader: () => fetch('blogsData.json'),
        Component: Blogs,
      }
    ],
  },
]);