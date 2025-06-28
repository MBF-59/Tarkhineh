import { NavLink } from "react-router-dom";

function Navlink({children,to}) {
  return (
    <div>
      <NavLink to={to} className="xl:text-sm">{children}</NavLink>
    </div>
  );
}

export default Navlink;
