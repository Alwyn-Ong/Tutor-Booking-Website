import MainLayout from "./layouts/MainLayout";
import Homepage from "./views/Homepage";
import Profile from "./views/Profile";
import Tutor from "./views/Tutor";
import Register from "./views/Register";
import TutorProfile from "./views/TutorProfile";
import Dashboard from "./views/Dashboard";

const routes = [
  // {
  //   path: "app",
  //   element: <MainLayout />,
  //   children: [
  //     { path: "/" },
  //     //   { path: "*", element: <Navigate to="/404" /> },
  //   ],
  // },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "profile", element: <Profile /> },
      { path: "tutor/:id", element: <Tutor /> },
      { path: "register", element: <Register /> },
      { path: "tutorprofile", element: <TutorProfile /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "*", element: <Homepage /> },
      // { path: "*", element: <Navigate to="/" /> },
    ],
  },
];

export default routes;
