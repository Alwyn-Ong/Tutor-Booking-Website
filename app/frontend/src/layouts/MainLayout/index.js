import TopBar from "./TopBar.js";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
