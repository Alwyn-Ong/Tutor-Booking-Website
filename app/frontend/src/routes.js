import MainLayout from "./layouts/MainLayout";
import Homepage from "./views/Homepage";
import Profile from "./views/Profile";
import Tutor from "./views/Tutor";
import Register from "./views/Register";
import TutorProfile from "./views/TutorProfile";
import ProfileLayout from "./layouts/ProfileLayout";
import EditNotification from "./components/ProfilePage/EditNotification";
import EditProfile from "./components/ProfilePage/EditProfile";
import EditEmail from "./components/ProfilePage/EditEmail";

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
    path: "/profile",
    element: <MainLayout />,
    children: [
      { path: "/", element: <EditProfile /> },
      { path: "/notification", element: <EditNotification /> },
      { path: "/email", element: <EditEmail /> },
      //   { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      // { path: "profile", element: <Profile /> },
      { path: "tutor", element: <Tutor /> },
      { path: "register", element: <Register /> },
      { path: "tutorprofile", element: <TutorProfile /> },
      //   { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
