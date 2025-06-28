import { Outlet } from "react-router-dom";
import HeaderMenupage from "../featuers/Menupage/HeaderMenupage";
import Header from "../ui/Header";
import Photo from "../ui/Photo";

function MenupageLayout() {
  return (
    <div>
      <Header />
      <Photo />
      <HeaderMenupage />
      <Outlet />
    </div>
  );
}

export default MenupageLayout;
