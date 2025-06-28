import { useEffect, useState } from "react";
import usegetfood3 from "../featuers/Home/usegetfoods3";
import Loading from "../ui/Loading";
import OrderStep_3 from "../ui/OrderStep_3";
import OrderStep_4 from "../ui/OrderStep_4";
import Totalprice from "../ui/Totalprice";
import { toPersianNumbersWithComma } from "../utils/toPersianNumbersWithComma";
import OrderStep_2 from "./OrderStep_2";

function OrderSteptwo({Setstep}) {
  const { data, isLoading } = usegetfood3();

  // const totalPrice = data.reduce(
  //   (acc, data) => acc + data.price_after_discount,
  //   0
  // );

  // const reviews_count = data.reduce((acc, data) => acc + data.reviews_count, 0);
 
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth); 
    };

    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);
 if (isLoading) return <Loading />;
  return (
    <div>{size>1140?<OrderStep_3  Setstep={Setstep}/>:<OrderStep_4 Setstep={Setstep}/>}</div>
  )
}

export default OrderSteptwo;
    // <div>
    //   {" "}
    //   <div className="w-full flex flex-row-reverse">
    //     <div className="w-2/5  border p-6 rounded-md h-fit ">
    //       <div className=" flex items-center justify-between  flex-row-reverse">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="25"
    //           fill="none"
    //         >
    //           <path
    //             fill="#353535"
    //             d="M21 7.23h-.08c-5.29-.53-10.57-.73-15.8-.2l-2.04.2a.755.755 0 0 1-.83-.68c-.04-.42.26-.78.67-.82l2.04-.2c5.32-.54 10.71-.33 16.11.2.41.04.71.41.67.82a.74.74 0 0 1-.74.68Z"
    //           />
    //           <path
    //             fill="#353535"
    //             d="M8.5 6.22c-.04 0-.08 0-.13-.01a.753.753 0 0 1-.61-.86l.22-1.31c.16-.96.38-2.29 2.71-2.29h2.62c2.34 0 2.56 1.38 2.71 2.3l.22 1.3c.07.41-.21.8-.61.86-.41.07-.8-.21-.86-.61l-.22-1.3c-.14-.87-.17-1.04-1.23-1.04H10.7c-1.06 0-1.08.14-1.23 1.03l-.23 1.3a.75.75 0 0 1-.74.63ZM15.21 23.25H8.79c-3.49 0-3.63-1.93-3.74-3.49L4.4 9.69c-.03-.41.29-.77.7-.8.42-.02.77.29.8.7l.65 10.07c.11 1.52.15 2.09 2.24 2.09h6.42c2.1 0 2.14-.57 2.24-2.09l.65-10.07c.03-.41.39-.72.8-.7.41.03.73.38.7.8l-.65 10.07c-.11 1.56-.25 3.49-3.74 3.49Z"
    //           />
    //           <path
    //             fill="#353535"
    //             d="M13.66 17.75h-3.33c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 13.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    //           />
    //         </svg>
    //         <span> سبد خرید(4)</span>
    //       </div>
    //       <div className="h-48 w-full flex flex-col overflow-auto ">
    //         {data.map((item, index) => (
    //           <div
    //             key={index}
    //             className="flex items-center justify-between rounded-sm bg-Gray-1 mt-1 px-2 py-2"
    //           >
    //             <div className="flex flex-col ">
    //               <span>{item.name}</span>
    //               <span className="text-Gray-5">
    //                 {toPersianNumbersWithComma(item.price)} تومان
    //               </span>
    //             </div>
    //             <div className="flex items-center gap-2 bg-Tint-1 px-1 py-1 rounded-sm">
    //               <span className="text-primary">+</span>
    //               <span className="text-primary">1</span>
    //               <span>
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="16"
    //                   height="17"
    //                   fill="none"
    //                 >
    //                   <path
    //                     fill="#417F56"
    //                     d="M14 4.986h-.053C10.42 4.633 6.9 4.5 3.414 4.853l-1.36.133a.503.503 0 0 1-.107-1l1.36-.133c3.547-.36 7.14-.22 10.74.133a.5.5 0 0 1 .447.547.494.494 0 0 1-.494.453Z"
    //                   />
    //                   <path
    //                     fill="#417F56"
    //                     d="M5.667 4.313c-.027 0-.054 0-.087-.007a.502.502 0 0 1-.407-.573l.147-.873c.107-.64.253-1.527 1.807-1.527h1.746c1.56 0 1.707.92 1.807 1.533l.146.867a.495.495 0 0 1-.406.573.495.495 0 0 1-.573-.406L9.7 3.033c-.093-.58-.113-.693-.82-.693H7.133c-.706 0-.72.093-.82.686l-.153.867a.5.5 0 0 1-.493.42ZM10.14 15.667H5.86c-2.327 0-2.42-1.287-2.494-2.327l-.433-6.713a.505.505 0 0 1 .467-.534.505.505 0 0 1 .533.467l.433 6.713c.074 1.014.1 1.394 1.494 1.394h4.28c1.4 0 1.426-.38 1.493-1.394l.433-6.713a.51.51 0 0 1 .534-.467.5.5 0 0 1 .466.534l-.433 6.713c-.073 1.04-.167 2.327-2.493 2.327Z"
    //                   />
    //                   <path
    //                     fill="#417F56"
    //                     d="M9.107 12h-2.22a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5h2.22c.273 0 .5.227.5.5s-.227.5-.5.5ZM9.666 9.333H6.333a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h3.333c.274 0 .5.227.5.5s-.226.5-.5.5Z"
    //                   />
    //                 </svg>
    //               </span>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //       <Totalprice totalPrice={totalPrice} reviews_count={reviews_count} />
    //     </div>
    //     <div className="border-2 rounded-sm overflow-y-auto  px-3   ml-2 h-[40rem]"></div>
    //   </div>
    // </div>