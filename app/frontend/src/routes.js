import MainLayout from './layouts/MainLayout';

const routes = [
  {
    path: "app",
    element: <MainLayout />,
    children: [
      // { path: "/", element: <Dashboard /> },
    //   { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;