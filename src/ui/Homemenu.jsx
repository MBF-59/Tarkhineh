import { useEffect, useState } from "react";
import Loading from "./Loading";
import usePhoto, { useHomemenupictuer } from "../featuers/Home/getphoto";
import { NavLink, useNavigate } from "react-router-dom";

function Homemenu() {
  const [icon, seticon] = useState([]);
  const { data = {}, isLoading } = usePhoto();
  const  {data:data1,isLoading:isLoading2}=useHomemenupictuer()
  useEffect(() => {
    if (data.HomeMenu) seticon(data.HomeMenu);
  }, [data]);
  const navigate=useNavigate();
  const menuItems = [
    { label: "سوالات متداول", to: "/home/tarkineh/questions" },
    { label: "قوانین ترخینه", to: "/home/tarkineh/roles" },
    { label: "حریم خصوصی", to: "/home/tarkineh/privacy" },
  ];
  if (isLoading || isLoading2) <Loading />;

  return (
    <div className=" flex flex-col items-center justify-center   mb-8">
      <div className="font-bold text-xl mt-6">منوی رستوران</div>
      <div className="grid grid-cols-2 gap-y-28 mt-16 w-full xl:grid-cols-4  xl:mx-4">
      {icon.map((item, index) => (
          <div onClick={()=>{navigate("/home/menu")}}  key={item.id} className="relative  bg-primary mx-4 rounded-md flex mt-20 items-center justify-center flex-col  shadow-md  px-7 ">
          
            <img className="-mt-11 mb-3 flex-1 xl:hidden" src={icon[index]?.image} alt="" />
              <img className={`-mt-40  hidden xl:block  ${data1[index]?.id == 4 ?"  pb-3":""}`}src={data1[index]?.image} alt="" />
            <span className="absolute -bottom-0.5 -bottom- whitespace-nowrap bg-white text-center font-normal text-sm px-6 py-1 rounded-sm -mb-2   shadow-md"><span   >{icon[index]?.title}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homemenu;
