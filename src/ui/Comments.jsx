import { useRef } from "react";
import usecomments from "../featuers/Home/getcomments";
import Loading from "./Loading";

function Comments() {
  const { data, isLoading } = usecomments();
  const scrollRef = useRef();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col bg-red  relative"> 
    <span className=" top1/2 bottom-1/2 transform -translate-x-1/2 mt-28 mb-5  font-bold text-xl text-Gray-8">نظرات کاربران</span>
    <div className="  flex gap-x-3  overflow-x-auto " ref={scrollRef}>

          <div className="absolute  left-0 mt-16 w-[9rem] h opacity-40  flex items-center ">
            <button onClick={scrollLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="border-2 mr-2 border-Gray-8 rounded-md bg-Gray-7 "
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
                  stroke="#bg-Gray-7 "
                  rx="7.5"
                />
                <path
                  fill="#353535"
                  d="M24 31.56a.989.989 0 0 1-.707-.293L14.6 22.573a3.654 3.654 0 0 1 0-5.146l8.693-8.694a1.006 1.006 0 0 1 1.414 0 1.006 1.006 0 0 1 0 1.414l-8.694 8.693c-.64.64-.64 1.68 0 2.32l8.694 8.693a1.006 1.006 0 0 1 0 1.414c-.2.186-.454.293-.707.293Z"
                />
              </svg>
            </button>{" "}
          </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex py-4 border border-Gray-4 px-4  rounded-sm "
        >
          <div className="flex flex-col items-center justify-center w-72">
            <div className="">
              <img src={item.image} alt="" />
            </div>
            <div className="flex flex-col mt-3">
              <span className="text-xs text-Gray-7 whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-xs text-Gray-7 whitespace-nowrap">
                {item.date}
              </span>
            </div>
          </div>
          <div className="flex flex-col mr-2">
            <div className="text-xs text-Gray-8 bg-transparent mt-3">
              {item.comment}
            </div>
            <div className="flex gap-x-1 self-end mt-10">
              <span>{item.rating}</span>
              <span className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  fill="none"
                >
                  <path
                    fill="url(#a)"
                    stroke="#ADADAD"
                    stroke-width=".25"
                    d="m7.729 4.185.027.086h4.066L8.606 6.607l-.074.053.029.087 1.228 3.78L6.573 8.19 6.5 8.138l-.073.052-3.217 2.336 1.23-3.779.028-.087-.074-.053-3.216-2.336h4.066l.027-.086L6.5.405l1.229 3.78Z"
                  />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="6.5"
                      x2="6.5"
                      y1="0"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset=".416"
                        stop-color="#7CBC91"
                        stop-opacity="0"
                      />
                      <stop offset=".418" stop-color="#F4B740" />
                      <stop offset="1" stop-color="#F4B740" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>);
}

export default Comments;
