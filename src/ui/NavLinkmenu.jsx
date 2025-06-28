import { NavLink } from "react-router-dom";
function NavLinkmenu({ children, to }) {
  return (
    <>
    

        <NavLink
          to={to}
          className={` hover:text-primary hover:border-b-4 hover:border-b-primary hover:text-2xl 
//                text-Gray-7 xl:text-2xl `}
        >{children}</NavLink>
 </>
 
  );
}

export default NavLinkmenu;
