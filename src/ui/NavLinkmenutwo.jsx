import { NavLink } from "react-router-dom";

function NavLinkmenutwo({ children, to }) {
  return (
    <NavLink
      to={to}
      className="bg-gray-300 rounded-full px-4 py-1 my-1 text-gray-800 flex items-center justify-center gap-x-1 whitespace-nowrap"
    >
      {children}
    </NavLink>
  );
}

export default NavLinkmenutwo;
