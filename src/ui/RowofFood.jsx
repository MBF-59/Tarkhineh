import usegetfood from "../featuers/Home/usegetfood";
import Loading from "./Loading";
import { toPersianNumbersWithComma } from "../utils/toPersianNumbersWithComma";
import { useRef, useState } from "react";
function RowofFood({ required, title, data, isLoading }) {
  const [like, setlike] = useState([]);
  const [have, sethave] = useState([]);
  const scrollRef = useRef();

  console.log(like);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };
  if (isLoading) return <Loading />;
  return (
    <>
    
      <div
        className={`relative pt-5  xl:pt-10 pb-9 pr-16  mt-4  ${
          required ? "bg-primary" : "bg-white"
        } flex-1`}
      >
        <div
          className={`mb-3 xl:mb-6 font-bold text-xl ${
            required ? "text-white" : "text-Gray-8"
          }    `}
        >
          {title}
        </div>
        <div
          ref={scrollRef}
          className={`flex items-center gap-x-5  overflow-x-auto verflow-x-hidden   flex-1  `}
        >
          <div className="absolute  left-0 top-0 h-full w-[9rem] opacity-75  flex items-center ">
            <button onClick={scrollLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="border-2 mr-2 border-Gray-8 rounded-md bg-White "
                width="40"
                height="40"
                fill="none"
              >
                <rect
                  width="39"
                  height="39"
                  x=".5"
                  y=".5"
                  fill="#fff"
                  rx="7.5"
                />
                <rect
                  width="39"
                  height="39"
                  x=".5"
                  y=".5"
                  stroke="#353535"
                  rx="7.5"
                />
                <path
                  fill="#353535"
                  d="M24 31.56a.989.989 0 0 1-.707-.293L14.6 22.573a3.654 3.654 0 0 1 0-5.146l8.693-8.694a1.006 1.006 0 0 1 1.414 0 1.006 1.006 0 0 1 0 1.414l-8.694 8.693c-.64.64-.64 1.68 0 2.32l8.694 8.693a1.006 1.006 0 0 1 0 1.414c-.2.186-.454.293-.707.293Z"
                />
              </svg>
            </button>{" "}
          </div>
          {data.map((item) => (
            <div
    
              className=" border rounded-sm w-72 bg-white  flex-1"
              key={item.id}
            >
              <div className="">
                <img className=" " src={item?.image} alt="" />
              </div>
              <div className="p-2">
                <div className="flex items-center justify-center mt-2 mb-3">
                  {item?.name}
                </div>
                <div className="flex items-center justify-between">
                  {/* سوتون سمت راست */}
                  <div className="flex flex-col items-center justify-between xl:mt-2">
                    <div className="flex flex-row-reverse  space-x-0">
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
                            className="whitespace-nowrap hidden xl:block xl:mr-0.5 xl:text-[0.6rem] mt-1 ml-8 text-Gray-8 "
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
                            className="whitespace-nowrap hidden xl:block xl:mr-0.5 xl:text-[0.6rem] mt-1 ml-8 text-Gray-5 "
                          >
                            افزودن به علاقمندی‌ها
                          </span>
                          <svg
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
                          </svg>
                        </>
                      )}






                      
                    </div>
                    <div className="flex flex-row-reverse   gap-x-1 mr-2 items-center mt-2 self-start">
                      {toPersianNumbersWithComma(item?.rating)}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        fill="none"
                      >
                        <path
                          fill="#F4B740"
                          stroke="#CBCBCB"
                          strokeWidth=".25"
                          d="m9.677 6.066.028.087h5.519l-4.391 3.19-.074.053.028.086 1.677 5.163-4.39-3.19L8 11.401l-.073.054-4.392 3.19 1.678-5.163.028-.086-.074-.053-4.39-3.19h5.518l.028-.087L8 .906l1.677 5.16Z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* سوتون سمت چپ */}
                  <div className="flex flex-col gap-x-2">
                    <span className="line-through text-Gray-5 flex items-center gap-x-2">
                      {toPersianNumbersWithComma(item?.price)}
                      <span className="text-Error bg-ErrorExtralight rounded-xl px-3 ">
                        %{toPersianNumbersWithComma(item?.discount_percentage)}
                      </span>
                    </span>

                    <div className="mr-2 mt-2">
                      {toPersianNumbersWithComma(item?.price_after_discount)}{" "}
                      تومان
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center m-2 mt-3">
                  {have.includes(item.id) ? (
                    <button
                      onClick={() =>
                        sethave((prev) => prev.filter((id) => id !== item.id))
                      }
                      className="bg-Gray-6 px-9 py-2 whitespace-nowrap rounded-sm text-white"
                    >
                      به سبد  اضافه شده
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
        </div>
      </div>
    </>
  );
}

export default RowofFood;
