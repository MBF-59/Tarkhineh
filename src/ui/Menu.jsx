import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderNavink from "./HeaderNav;ink";

function Menu() {



  return (
    <div>
      <ul className="flex items-center justify-center gap-x-6 cursor-pointer">

        <HeaderNavink to={"/home/mainpage"}>صفحه اصلی</HeaderNavink>
        <HeaderNavink to={"/home/shobeh"}>شعبه</HeaderNavink>
        <HeaderNavink to={"/home/menu"}>منو</HeaderNavink>
        <HeaderNavink to={"/home/dealership"}>اعطای نمایندگی</HeaderNavink>
        <HeaderNavink to={"/home/aboutus"}>درباره ما</HeaderNavink>
        <HeaderNavink to={"/home/textus"}>تماس باما</HeaderNavink>
      </ul>
    </div>
  );
}

export default Menu;
