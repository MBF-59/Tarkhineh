import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeInput from "../../ui/HomeInput";
import HeaderNavink from "../../ui/HeaderNav;ink";
import Navlink from "../../ui/Navlink";
import NavLinkmenu from "../../ui/NavLinkmenu";
import NavLinkmenutwo from "../../ui/NavLinkmenutwo";

function HeaderMenupage() {
  const [activeItem, setActiveItem] = useState("صفحه اصلی");

  const menuItems = [, , ,];
  const menuCategories = [, , "غذاهای غیر ایرانی", "غذاهای ایرانی"];
  return (
    <div className="">
      <div>
        <ul className="flex items-center h-12 gap-x-6 cursor-pointer  px-8  bg-Gray-3">
          <li>
            <NavLinkmenu to={"/home/menu"}>
              {" "}
              {"غذای اصلی"}
            </NavLinkmenu>
          </li>
          <li>
            <NavLinkmenu to={"/home/menu"}> {"پیش غذا"}</NavLinkmenu>
          </li>
          <li>
            <NavLinkmenu to={"/home/menu"}> {"دسر"}</NavLinkmenu>
          </li>
          <li>
            <NavLinkmenu to={"/home/menu"}> {"نوشیدنی"}</NavLinkmenu>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center w-full">
        <ul className="flex gap-x-2 mt-2 ">
          <li>
            <NavLinkmenutwo to={"/home/menu"}>
              {"ساندویچ‌ها"}
         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              fill="none"
            >
              <path
                fill="#353535"
                d="M10.5 13.78a.495.495 0 0 1-.353-.147L5.8 9.287a1.827 1.827 0 0 1 0-2.574l4.347-4.346a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .706L6.507 7.42a.82.82 0 0 0 0 1.16l4.346 4.347a.503.503 0 0 1 0 .706.524.524 0 0 1-.353.147Z"
              />
            </svg>   </NavLinkmenutwo>
          </li>

          <li>
            <NavLinkmenutwo to={"/home/menu"}>
              {"پیتزاها"}
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              fill="none"
            >
              <path
                fill="#353535"
                d="M10.5 13.78a.495.495 0 0 1-.353-.147L5.8 9.287a1.827 1.827 0 0 1 0-2.574l4.347-4.346a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .706L6.507 7.42a.82.82 0 0 0 0 1.16l4.346 4.347a.503.503 0 0 1 0 .706.524.524 0 0 1-.353.147Z"
              />
            </svg>  </NavLinkmenutwo>
          </li>

          <li>
            <NavLinkmenutwo to={"/home/menu"}>
              {"غذاهای غیر ایرانی"}
         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              fill="none"
            >
              <path
                fill="#353535"
                d="M10.5 13.78a.495.495 0 0 1-.353-.147L5.8 9.287a1.827 1.827 0 0 1 0-2.574l4.347-4.346a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .706L6.507 7.42a.82.82 0 0 0 0 1.16l4.346 4.347a.503.503 0 0 1 0 .706.524.524 0 0 1-.353.147Z"
              />
            </svg>   </NavLinkmenutwo>
          </li>

          <li>
            <NavLinkmenutwo to={"/home/menu"}>
              {"غذاهای ایرانی"}
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              fill="none"
            >
              <path
                fill="#353535"
                d="M10.5 13.78a.495.495 0 0 1-.353-.147L5.8 9.287a1.827 1.827 0 0 1 0-2.574l4.347-4.346a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .706L6.507 7.42a.82.82 0 0 0 0 1.16l4.346 4.347a.503.503 0 0 1 0 .706.524.524 0 0 1-.353.147Z"
              />
            </svg> </NavLinkmenutwo>
          </li>
        </ul>{" "}
    <div className=" w-full items-center justify-center  xl:block hidden">
      <div className="flex font-bold text-xs items-center justify-between border border-Gray-4 bg-white w-full rounded-sm  mt-3 mx-2 px-4 py-2">
        <input type="text" className="outline-none" placeholder="جستجو"/>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path
              fill="#353535"
              d="M7.666 14.5C3.9 14.5.833 11.433.833 7.667.833 3.9 3.9.833 7.666.833 11.433.833 14.5 3.9 14.5 7.667c0 3.766-3.067 6.833-6.834 6.833Zm0-12.667a5.84 5.84 0 0 0-5.833 5.834A5.84 5.84 0 0 0 7.666 13.5 5.84 5.84 0 0 0 13.5 7.667a5.84 5.84 0 0 0-5.834-5.834ZM14.667 15.167a.495.495 0 0 1-.354-.147l-1.333-1.333a.503.503 0 0 1 0-.707.503.503 0 0 1 .707 0l1.333 1.333a.503.503 0 0 1 0 .707c-.1.1-.227.147-.353.147Z"
            />
          </svg>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default HeaderMenupage;
