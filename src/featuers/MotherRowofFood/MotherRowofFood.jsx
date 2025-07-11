import { useNavigate } from "react-router-dom";
import RowofFood from "../../ui/RowofFood";
import usegetfood from "../Home/usegetfood";
import usegetfood2 from "../Home/usegetfoods2";
import usegetfood3 from "../Home/usegetfoods3";

function MotherRowofFood() {
  const { data, isLoading } = usegetfood();
  const{data:data2,isLoading:isLoading2} =usegetfood2()
  const{data:data3,isLoading:isLoading3}=usegetfood3()

  const navigate=useNavigate();
  return (
    <div>

      <RowofFood data={data} title={"پیشنهاد ویژه"} isLoading={isLoading} />
      <RowofFood data={data2} title={"غذای محبوب"}  required isLoading={isLoading2} />
      <RowofFood data={data3} title={"غذاهای غیر ایرانی"} isLoading={isLoading3} />
      <div onClick={()=>{navigate("/home/menu")}} className="flex items-center justify-center"><button className=" flex flex-row-reverse gap-x-1 border-2 px-6 py-2 rounded-sm border-primary text-primary"><span>مشاهده منوی کامل</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#417F56" d="M16 22.75H8c-3.02 0-4.75-1.73-4.75-4.75V8.25C3.25 5.1 4.85 3.5 8 3.5c.41 0 .75.34.75.75a1.499 1.499 0 0 0 1.5 1.5h3.5c.83 0 1.5-.67 1.5-1.5 0-.41.34-.75.75-.75 3.15 0 4.75 1.6 4.75 4.75V18c0 3.02-1.73 4.75-4.75 4.75ZM7.35 5.02c-1.58.13-2.6.84-2.6 3.23V18c0 2.22 1.03 3.25 3.25 3.25h8c2.22 0 3.25-1.03 3.25-3.25V8.25c0-2.39-1.02-3.09-2.6-3.23a3.006 3.006 0 0 1-2.9 2.23h-3.5c-.8 0-1.55-.31-2.12-.88-.38-.38-.64-.84-.78-1.35Z"/><path fill="#417F56" d="M13.75 7.25h-3.5c-.8 0-1.55-.31-2.12-.88-.57-.57-.88-1.32-.88-2.12 0-1.65 1.35-3 3-3h3.5c.8 0 1.55.31 2.12.88.57.57.88 1.32.88 2.12 0 1.65-1.35 3-3 3Zm-3.5-4.5a1.498 1.498 0 0 0-1.06 2.56c.28.28.66.44 1.06.44h3.5a1.498 1.498 0 0 0 1.06-2.56c-.28-.28-.66-.44-1.06-.44h-3.5ZM12 13.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM16 17.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"/></svg></button></div>

    </div>
  );
}

export default MotherRowofFood;
