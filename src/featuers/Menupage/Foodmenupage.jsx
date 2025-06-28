import { useState } from "react";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbersWithComma";
import MenuModal from "./MenuModal";

function Foodmenupage({ title, data }) {
  const truncateText = (text, maxLength = 35) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
const[choice,setchoice]=useState("")
const[open,setopen]=useState(false)
  const [have, sethave] = useState([]);
    const [like, setlike] = useState([]);
console.log(data);

  return (
    <>
      <div className="font-bold text-xl mr-5 mt-9 mb-2  ">{title}</div>
      <div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-x-3 xl:gap-y-3 gap-y-5 mb-3 ">
        {data.map((item) => (
          <div
    
            key={item.id}
            className="flex border-2 border-Gray-4 rounded-lg bg-white hover:shadow-lg"
          >
            <img       onClick={() => {
            setchoice(item);
            setopen(true); 
          }} src={item?.image} className="object-cover w-1/4 overflow-hidden rounded-lg" alt="" />

            {/* سوتون سمت چپ را به سه سطر مختلف تقسیم بندی کرده ایم  */}
            <div className="flex flex-col p-3 w-full justify-between py-7 xl:py-2">
              <div className=" flex items-center justify-between    w-full ">
                <div className=" text-xl">{item?.name}</div>
                <div className="flex gap-x-3  ">
                  <div className="text-Gray-5  line-through le">
                    {toPersianNumbersWithComma(item?.original_price ?? "")}
                  </div>
                  <div className="text-Error bg-ErrorExtralight rounded-full px-2 py-0.5">
                    {item?.discount ? "%" : ""}
                    {toPersianNumbersWithComma(item?.discount ?? "")}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  {truncateText(item?.ingredients.join(", "))}
                </div>
                <div className="flex gap-x-2">
                  {item?.price}
                  <span>تومان</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-3">
                      {like.includes(item.id) ? (
                        <>
                          <span
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                              setlike((prev) =>
                                prev.filter((id) => id !== item.id)
                              )
                            }
                            className="whitespace-nowrap xl:block xl:mr-0.5 xl:text-[0.6rem] mt-1 ml-8 text-Gray-8 "
                          >
                            به علاقه مندی ها افزوده شده
                          </span>
                        </>
                      ) : (
                        <>
                          <span
                       
                            onClick={() =>
                              setlike((prev) => [...prev, item.id])
                            }
                            className="whitespace-nowrap  xl:block xl:mr-0.5 xl:text-[0.6rem] mt-1 ml-8 text-Gray-5 "
                          >
                            افزودن به علاقمندی‌ها
                          </span>
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="17"
                            className="ml-5 mb-2 "
                            fill="none"
                          >
                            <path
                              fill="#ADADAD"
                              d="M8 14.933c-.207 0-.407-.026-.573-.086C4.88 13.973.833 10.873.833 6.293c0-2.333 1.887-4.226 4.207-4.226 1.127 0 2.18.44 2.96 1.226a4.143 4.143 0 0 1 2.96-1.226c2.32 0 4.207 1.9 4.207 4.226 0 4.587-4.047 7.68-6.594 8.554-.166.06-.366.086-.573.086ZM5.04 3.067c-1.767 0-3.207 1.446-3.207 3.226 0 4.554 4.38 7.087 5.92 7.614.12.04.38.04.5 0 1.534-.527 5.92-3.054 5.92-7.614 0-1.78-1.44-3.226-3.206-3.226a3.168 3.168 0 0 0-2.56 1.293c-.187.253-.614.253-.8 0A3.18 3.18 0 0 0 5.04 3.067Z"
                            />
                          </svg> */}
                        </>
                      )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="17"
                    fill="none"
                  >
                    <path
                      fill="#F4B740"
                      d="m8 .5 1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.556l-4.702 3.416 1.796-5.528L.392 6.028h5.812L8 .5ZM24 .5l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L24 11.556l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L24 .5ZM40 .5l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L40 11.556l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L40 .5ZM56 .5l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L56 11.556l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L56 .5ZM72 .5l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L72 11.556l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L72 .5Z"
                    />
                  </svg>
                </div>
                       {have.includes(item.id) ? (
                    <button
                      onClick={() =>
                        sethave((prev) => prev.filter((id) => id !== item.id))
                      }
                      className="bg-Gray-6 px-9 py-2 whitespace-nowrap rounded-sm text-white"
                    >
                      به سبد خرید اضافه شده
                    </button>
                  ) : (
                    <button
                      onClick={() => sethave((prev) => [...prev, item.id])}
                      className="bg-primary px-9 py-2 whitespace-nowrap rounded-sm text-white"
                    >
                      افزودن به سبد خرید
                    </button>
                  )}
              </div>
            </div>
          </div>  
          
        ))}
      <MenuModal open={open} onClose={()=>setopen((prev)=>!prev)}>  {    choice &&     <><div
       
            key={choice?.id}
            className="flex border-2 border-Gray-4 rounded-sm bg-white "
          >
            <img  src={choice?.image} className="object-cover w-1/4" alt="" />

            {/* سوتون سمت چپ را به سه سطر مختلف تقسیم بندی کرده ایم  */}
            <div className="flex flex-col p-3 w-full gap-y-2">
              <div className=" flex items-center justify-between    w-full ">
                <div className="">{choice?.name}</div>
                <div className="flex gap-x-3  ">
                  <div className="text-Gray-5  line-through le">
                    {toPersianNumbersWithComma(choice?.original_price ?? "")}
                  </div>
                  <div className="text-Error bg-ErrorExtralight rounded-full px-2 py-0.5">
                    {choice?.discount ? "%" : ""}
                    {toPersianNumbersWithComma(choice?.discount ?? "")}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  {truncateText(choice?.ingredients.join(", "))}
                </div>
                <div className="flex gap-x-2">
                  {choice?.price}
                  <span>تومان</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    fill="none"
                  >
                    <path
                      fill="#717171"
                      d="M8 14.933c-.207 0-.407-.026-.573-.086C4.88 13.973.833 10.873.833 6.293c0-2.333 1.887-4.226 4.207-4.226 1.127 0 2.18.44 2.96 1.226a4.143 4.143 0 0 1 2.96-1.226c2.32 0 4.207 1.9 4.207 4.226 0 4.587-4.047 7.68-6.594 8.554-.166.06-.366.086-.573.086ZM5.04 3.067c-1.767 0-3.207 1.446-3.207 3.226 0 4.554 4.38 7.087 5.92 7.614.12.04.38.04.5 0 1.534-.527 5.92-3.054 5.92-7.614 0-1.78-1.44-3.226-3.206-3.226a3.168 3.168 0 0 0-2.56 1.293c-.187.253-.614.253-.8 0A3.18 3.18 0 0 0 5.04 3.067Z"
                    />
                  </svg>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="17"
                    fill="none"
                  >
                    <path
                      fill="#F4B740"
                      d="m8 .5 1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.556l-4.702 3.416 1.796-5.528L.392 6.028h5.812L8 .5ZM24 .5l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L24 11.556l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L24 .5ZM40 .5l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L40 11.556l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L40 .5ZM56 .5l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L56 11.556l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L56 .5ZM72 .5l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L72 11.556l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L72 .5Z"
                    />
                  </svg>
                </div>
                <div className="bg-primary flex-1 max-w-72 flex items-center justify-center py-2 px-2 rounded-sm">
                  <button className="text-White">افزودن به سبد خرید</button>
                </div>
              </div>
            </div>
          </div>  </> }</MenuModal>  </div>
  
    </>
  );
}

export default Foodmenupage;
