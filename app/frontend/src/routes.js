import MainLayout from "./layouts/MainLayout";
import Homepage from "./views/Homepage";
import Profile from "./views/Profile";
import Tutor from "./views/Tutor";

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
      { path: "/", element: <Homepage/> },
      { path: "profile", element: <Profile/>},
      { path: "tutor", element: <Tutor/>},
      //   { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
