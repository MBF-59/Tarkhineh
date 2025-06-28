import { NavLink } from "react-router-dom";
function HeaderNavink({ children, to }) {
  return (
    <div>
    

        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? "menu-active text-green-600 font-bold border-b-2 border-green-600"
              : ""
          }
        >{children}</NavLink>
 
    </div>
  );
}

export default HeaderNavink;
