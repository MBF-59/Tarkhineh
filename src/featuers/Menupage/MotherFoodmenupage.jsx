import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";
import Foodmenupage from "./Foodmenupage";
import usegetiranianfood, { usegetpizza, usegetsandavige, usegetunirainanfood } from "./usegetfood";

function MotherFoodmenupage() {
    const {data:data1=[],isLoading:isLoading1}=usegetiranianfood()

 const {data:data2=[],isLoading:isLoading2}=usegetunirainanfood() 



 const {data:data3=[],isLoading:isLoading3} =usegetpizza()

 const {data:data4=[],isLoading:isLoading4} = usegetsandavige()
const navigate=useNavigate();
if (isLoading1 ||isLoading2||isLoading3||isLoading4) return <Loading/>

  return (
    <div className= " relative ">
      <button onClick={()=>{navigate("/home/order")}}  className="absolute left-0 flex items-center justify-center flex-row-reverse border px-4 py-1 text-primary border-primary rounded-md -mt-2"><span>تکمیل فرایند خرید </span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path fill="#417F56" d="M18.69 17.75H8.04c-.99 0-1.94-.42-2.61-1.15a3.573 3.573 0 0 1-.93-2.7l.83-9.96c.03-.31-.08-.61-.29-.84-.21-.23-.5-.35-.81-.35H2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.74c.73 0 1.42.31 1.91.84.27.3.47.65.58 1.04h12.49c1.01 0 1.94.4 2.62 1.12.67.73 1.01 1.68.93 2.69l-.54 7.5c-.11 1.83-1.71 3.31-3.54 3.31ZM6.78 4.62 6 14.02c-.05.58.14 1.13.53 1.56.39.43.93.66 1.51.66h10.65c1.04 0 1.98-.88 2.06-1.92l.54-7.5a2.04 2.04 0 0 0-2.06-2.21H6.78v.01ZM16.75 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM8.75 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5Z"/><path fill="#417F56" d="M21.5 8.75h-12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z"/></svg></button>
      <Foodmenupage data={data1} title={"ایرانی"}/>
      <Foodmenupage  data={data2}  title={"غیر ایرانی"}/>
      <Foodmenupage  data={data3}  title={"پیتزا"}/>
      <Foodmenupage  data={data4}   title={"ساندویچ ها "}/>
    </div>
  );
}

export default MotherFoodmenupage;
