import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";

function TarkinehLayout() {
  return (
    <>
      <div className="">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default TarkinehLayout;
