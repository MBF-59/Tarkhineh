import { useState } from "react";
import { NavLink } from "react-router-dom";
import usegetquestions, {
  usegetprivacy,
} from "../featuers/questionsfamily/usequestionsfamily";
import Loading from "../ui/Loading";

function Privacy() {
  const [openId, setOpenId] = useState(null);
  const [choice, setChoice] = useState(null);
  const menuItems = [
    { label: "سوالات متداول", to: "/home/tarkineh/questions" },
    { label: "قوانین ترخینه", to: "/home/tarkineh/roles" },
    { label: "حریم خصوصی", to: "/home/tarkineh/privacy" },
  ];

  const handleClick = (id, item) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
      setChoice(item);
    }
  };
  const { data, isLoading } = usegetprivacy();

  console.log(data);

  if (isLoading) return <Loading />;
  return (
    <div className="mt-10">
      {" "}
      <div className="relative">
        <img src="/public/photo/harem.png" alt="" />
        <span className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-4xl whitespace-nowrap text-white">
   حریم شخصی کاربران 
        </span>
      </div>
      <div className="">
        <div>
          <ul className="flex items-center gap-x-6 cursor-pointer px-8 bg-Gray-3 h-16 mb-5">
            {menuItems.map((item) => (
              <li key={item.to} className="">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b-4 border-b-primary    p-4 "
                      : "text-Gray-7  p-4"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center   mb-10 border rounded-sm border-Gray-4  mx-12 ">
          {data.map((item, index) => {
            return (
              <>
                <div
                  key={item?.id}
                  onClick={() => handleClick(item.id, item)}
                  className={`flex items-center justify-between flex-row-reverse w-full px-4 py-5 ${
                    open ? "" : "border-b  border-b-Gray-4"
                  }`}
                  id="header"
                >
                    <svg
                      className={`w-8 h-8 transition-transform duration-300 ${
                        openId === item.id
                          ? "rotate-180 fill-[#417f56]"
                          : "fill-[#353535]"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path d="M16 22.4c-.933 0-1.867-.36-2.573-1.067L4.733 12.64a1.006 1.006 0 0 1 0-1.413 1.006 1.006 0 0 1 1.414 0l8.693 8.693c.64.64 1.68.64 2.32 0l8.693-8.693a1.006 1.006 0 0 1 1.414 0 1.006 1.006 0 0 1 0 1.413l-8.694 8.693A3.635 3.635 0 0 1 16 22.4Z" />
                    </svg>
                  <span className="text-primary">{item?.heading}</span>
                </div>{" "}
                {openId === item.id && (
                  <div className="px-4 py-5 text-Gray-7 self-start" id="body">
                    {item.content}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Privacy;
