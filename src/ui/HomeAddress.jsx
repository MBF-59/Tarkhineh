import { useEffect, useState } from "react";
import usegetaddress from "../featuers/Home/usegetaddress";
import Loading from "./Loading";
import Modal from "./Modal";

function HomeAddress() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const [address, setaddress] = useState([]);
  const { data, isLoading } = usegetaddress();
  const [open, setopen] = useState(false);
  const [selectephoto, setselectphoto] = useState(null);

  useEffect(() => {
    if (data) {
      setaddress(data);
    }
  }, [data]);

  // برای ریسایز صفحه
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mt-5 mx-5 ">
        <div className="flex items-center justify-center ">
          <div className="font-bold text-xl mt-6">ترخینه گردی</div>
        </div>
        <div className="flex mt-5 gap-x-5 flex-wrap items-center justify-center mb-8  ">
          {address.map((item, index) => {
            return isMobile ? (
              <div
                key={index}
                onClick={() => {
                  setopen((prev) => !prev);
                  setselectphoto(item?.image);
                }}
                className="border border-Gray-7 flex items-center rounded-xl overflow-hidden mt-2 w-full"
              >
                          <div className="w-1/3 h-48">
                  <img
                    className="w-full h-48 object-cover rounded-t-sm border-b-Gray-4"
                    src={item?.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center justify-center mx-auto w-1/2">
                  <div className="font-medium text-sm text-Gray-8">
                    {item?.shobeh}
                  </div>
                  <div className="font-normal text-[0.625rem] text-Gray-7 px-2 pt-2">
                    {item?.address}
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="flex flex-col w-60 rounded-xl border border-Gray-4   "
                onClick={() => {
                  setopen((prev) => !prev);
                  setselectphoto(item?.image);
                }}
              >
                <div className="w-full h-48">
                  <img
                    className="w-full h-48 object-cover rounded-t-sm border-b-Gray-4"
                    src={item?.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full mt-3 mx-auto">
                  <div className="font-semibold text-center text-xl text-Gray-8">
                    {item?.shobeh}
                  </div>
                  <div className="font-normal text-center text-xs text-Gray-7 px-2 pt-2 pb-2">
                    {item?.address}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Modal open={open} onClose={() => setopen((prev) => !prev)}>
          {selectephoto && <img className="" src={selectephoto} alt="" />}
        </Modal>
      </div>
    </>
  );
}

export default HomeAddress;


{
  /* <div className="mt-5 mx-5 ">
// <div className="flex items-center justify-center ">
//   <span>ترخینه گردی</span>
// </div>
// <div className="flex flex-col xl:flex-row xl:mx-auto">
// {address.map((item) => { */
}
//   return (
//     <>
//       {" "}
//       <div className="border border-Gray-7 flex items-center rounded-xl overflow-hidden mt-2 ">
//         <div className="w-1/2 h-full">
//           <img
//             className="  w-full h-full "
//             src={item?.image}
//             alt=""
//           />
//         </div>
//         <div className="flex flex-col items-center justify-center w-1/2">
//           <div className="font-medium text-sm text-Gray-8">
//             {item?.shobeh}
//           </div>
//           <div className="font-normal text-[0.625rem] text-Gray-7 px-2 pt-2">
//             {item?.address}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// })}</div>
// </div>

// <div className="mt-5 mx-5 flex flex-col ">
//   <div className="flex items-center justify-center ">
//     <span>ترخینه گردی</span>
//   </div>

//   {address.map((item) => {
//     return (
//       <>

{
  /* <div className="border border-Gray-7 flex items-center rounded-xl overflow-hidden mt-2 ">
  <div className="w-1/2 h-full">
    <img className="  w-full h-full " src={item?.image} alt="" />
  </div>
  <div className="flex flex-col items-center justify-center w-1/2">
    <div className="font-medium text-sm text-Gray-8">{item?.shobeh}</div>
    <div className="font-normal text-[0.625rem] text-Gray-7 px-2 pt-2">
      {item?.address}
    </div>
  </div>
</div>; */
}
//       </>
//     );
//   })}
// </div>

//  <>
//    <div
//      className="flex flex-col w-60   rounded-sm border border-Gray-4"
//      onClick={() => {
//        setopen((prev) => !prev);
//        setselectphoto(item?.image);
//      }}
//    >
//      <div className="w-full  h-48 ">
//        {" "}
//        <img
//          className="  w-full  h-48 object-cover rounded-t-sm border-b-Gray-4"
//          src={item?.image}
//          alt=""
//        />
//      </div>

//      <div className="flex flex-col items-center justify-center w-full mt-3    mx-auto">
//        <div className="font-semibold  text-center text-xl  text-Gray-8">
//          {item?.shobeh}
//        </div>
//        <div className="font-normal text-center text-xs text-Gray-7 px-2 pt-2 pb-2 ">
//          {item?.address}
//        </div>
//      </div>
//    </div>

//  </>
