import { useState } from "react";
import usegettextus from "../featuers/textus/usetextus";
import Loading from "../ui/Loading";
import Modal from "../ui/Modal";
import Header from "../ui/Header";

function Textus() {
  const { data, isLoading } = usegettextus();
  const[pic,setpic]=useState();
  const[open,setopen]=useState()

  console.log(pic);
  console.log(pic);

  if (isLoading) return <Loading />;
  return (
    <>
    <Header/>
    <div className="">
      {" "}
      <div className="relative">
        <img src="/public/photo/text-us.png" alt="" />
        <span className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-4xl whitespace-nowrap text-white">
          با ترخینه در تماس باشید.
        </span>
      </div>
      {data.map((item) => {
        return (
          <>
            {" "}
            <div  className="flex flex-col xl:flex-row mt-10 mb-10 border-2 mx-5 rounded-sm  pb-5 xl:pb-0 hover:shadow-lg">
              <div className="">
                <img onClick={()=>{setpic(item) ;setopen(true)}}  src={item?.image} alt="" className="w-full"/>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-4 mt-4 xl:items-center xl:mx-auto">
                <div className="text-Gray-8 text-xl">{item?.name}</div>

                <div className="space-y-2 flex flex-col items-center justify-center">
                  <div className="text-Gray-7 text-xs">{item?.address}</div>
                  <div className="text-Gray-7 text-xs">
                    {item?.phone.join()}
                  </div>
                  <div className="text-Gray-7 text-xs">
                    {item?.working_hours}
                  </div>
                </div>

                {/* <div className=" flex items-center w-full px-5 gap-x-5">
                  <button className="border whitespace-nowrap px-6 py-2 text bg-white text-primary border-primary rounded-sm w-full ">
                    صفحه شعبه
                  </button>
                  <button className="border whitespace-nowrap px-6 py-2 text bg-primary text-white border-primary rounded-sm w-full ">
                    
                    دیدن در نقشه
                  </button>
                </div> */}
              </div>
            </div>
          </>
        );
      })}
      <Modal open={open} title={pic?.name} onClose={()=>{ setopen((prev)=> !prev)}}>{pic  &&    <img src={pic?.image} alt="" className="w-full"/>}</Modal>
    </div></>
  );
}

export default Textus;
