import { useEffect, useState } from "react";
import HeaderNavink from "./HeaderNav;ink";

export default function AboutusText() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="mt-2 px-5 pt-4 pb-10 flex flex-col gap-y-5 xl:flex-row xl:gap-x-6 xl:pb-14 xl:mt-4"
      style={{
        backgroundImage: "url('/photo/about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-y-5 xl:w-1/2 mt-4 ">
        <div className="">
          <span className="text-white xl:font-bold text-2xl  xl:text-xl">
            رستوران ها ی زنجیره ای ترخینه
          </span>
        </div>
        <div className="text-white text-justify font-normal text-xs leading-[1.8rem]   xl:leading-[2.25rem]  xl:text-xl">
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان
          شما عزیزان ارائه دهیم.
        </div>

        <button className="flex items-center justify-center border border-white px-9 py-2 rounded-sm self-end ">
          <span className="font-medium text-sm text-white">
            {" "}
            <HeaderNavink to={"/home/aboutus"}>اطلاعات بیشتر</HeaderNavink>
          </span>{" "}
          <span className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-6 h-6 mr-1.5"
              fill="none"
            >
              <path
                fill="#fff"
                d="M15.5 20.67c-.19 0-.38-.07-.53-.22l-6.52-6.52a2.74 2.74 0 0 1 0-3.86l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.52 6.52c-.48.48-.48 1.26 0 1.74l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22Z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div>
        {isMobile ? (
          <>
            <div className="grid grid-cols-2  items-center justify-center  gap-y-9    mt-3 ">
              <div className="flex flex-col items-center justify-center     ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    className=" xl:hidden"
                  >
                    <path
                      fill="#fff"
                      d="M12 12.75c-3.17 0-5.75-2.58-5.75-5.75S8.83 1.25 12 1.25 17.75 3.83 17.75 7s-2.58 5.75-5.75 5.75Zm0-10A4.26 4.26 0 0 0 7.75 7 4.26 4.26 0 0 0 12 11.25 4.26 4.26 0 0 0 16.25 7 4.26 4.26 0 0 0 12 2.75ZM20.59 22.75c-.41 0-.75-.34-.75-.75 0-3.45-3.52-6.25-7.84-6.25S4.16 18.55 4.16 22c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.27 4.19-7.75 9.34-7.75 5.15 0 9.34 3.48 9.34 7.75 0 .41-.34.75-.75.75Z"
                    />
                  </svg>
                </span>
                <span className="text-white whitespace-nowrap mt-3 xl:hidden">
                  {" "}
                  پرسنلی مجرب و حرفه ای
                </span>
              </div>
              <div className="flex flex-col items-center justify-center     ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 xl:w-12 xl:h-12          xl:hidden"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M22 22.75H5c-2.07 0-3.75-1.68-3.75-3.75V2c0-.41.34-.75.75-.75s.75.34.75.75v17c0 1.24 1.01 2.25 2.25 2.25h17c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                    />
                    <path
                      fill="#fff"
                      d="M5 17.75c-.17 0-.35-.06-.49-.18a.756.756 0 0 1-.08-1.06l4.59-5.36c.5-.58 1.22-.93 1.98-.96.76-.02 1.51.26 2.05.8l.95.95c.25.25.57.37.93.37.35-.01.67-.17.9-.44l4.59-5.36c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-4.59 5.36c-.5.58-1.22.93-1.98.96a2.78 2.78 0 0 1-2.05-.8l-.94-.95c-.25-.25-.58-.38-.93-.37-.35.01-.67.17-.9.44l-4.59 5.36a.8.8 0 0 1-.58.26Z"
                    />
                  </svg>
                </span>
                <span className="text-white whitespace-nowrap  mt-3 xl:hidden">
                  {" "}
                  کیفیت بالای غذا{" "}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center   ">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 xl:w-12 xl:h-12   xl:hidden"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M17.6 22.56H6.4c-1.82 0-3.48-1.4-3.78-3.2L1.29 11.4c-.21-1.24.39-2.83 1.38-3.62L9.6 2.23c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-1.99 3.2-3.78 3.2ZM11.99 2.94c-.53 0-1.06.16-1.45.47L3.61 8.96c-.57.46-.96 1.48-.84 2.2l1.33 7.96c.18 1.05 1.23 1.94 2.3 1.94h11.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.12-.72-.28-1.75-.84-2.2l-6.93-5.54c-.4-.31-.93-.47-1.47-.47Z"
                    />
                    <path
                      fill="#fff"
                      d="M14.12 15.13a.75.75 0 0 1-.52-.21c-.97-.93-2.23-.93-3.21 0-.3.29-.77.28-1.06-.02-.29-.3-.28-.77.02-1.06 1.55-1.49 3.72-1.49 5.28 0 .3.29.31.76.02 1.06-.13.15-.33.23-.53.23Z"
                    />
                    <path
                      fill="#fff"
                      d="M16.24 13.01c-.19 0-.38-.07-.52-.21-.47-.46-1-.83-1.56-1.1-1.4-.67-2.93-.67-4.32 0-.56.27-1.08.64-1.56 1.1-.29.29-.77.29-1.06-.01-.29-.3-.28-.77.01-1.06.59-.58 1.25-1.04 1.96-1.38 1.81-.87 3.81-.87 5.61 0 .71.34 1.37.8 1.96 1.38a.746.746 0 0 1-.52 1.28ZM12 17.5c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0 .39.39.39 1.02 0 1.41-.2.19-.45.29-.71.29Z"
                    />
                  </svg>
                </span>
                <span className="text-white whitespace-nowrap  mt-3 xl:hidden">
                  {" "}
                  محیطی دلنشین و ارام{" "}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center      xl:hidden  ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bg- w-6 h-6 xl:w-12 xl:h-12"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M16.38 22.75H3.24c-.95 0-1.83-.44-2.4-1.21-.58-.78-.75-1.76-.46-2.69L4.59 5.32A2.982 2.982 0 0 1 7.45 3.2h12.3c1.21 0 2.3.72 2.76 1.84.25.58.3 1.24.15 1.89l-3.37 13.53a2.976 2.976 0 0 1-2.91 2.29ZM7.46 4.71a1.5 1.5 0 0 0-1.43 1.06L1.82 19.3c-.14.47-.06.96.24 1.36.28.38.72.6 1.19.6h13.14c.69 0 1.29-.47 1.45-1.14l3.37-13.54c.08-.33.06-.66-.07-.95-.24-.57-.77-.93-1.38-.93H7.46v.01Z"
                    />
                    <path
                      fill="#fff"
                      d="M20.78 22.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.78c.41 0 .79-.17 1.07-.47.28-.3.42-.7.39-1.11l-.99-13.62c-.03-.41.28-.77.69-.8.41-.02.77.28.8.69l.99 13.62c.06.82-.23 1.64-.79 2.24-.55.61-1.34.95-2.16.95ZM9.68 7.13c-.06 0-.12-.01-.18-.02-.4-.1-.65-.5-.55-.91l1.04-4.32a.751.751 0 1 1 1.46.36l-1.04 4.32c-.08.34-.39.57-.73.57ZM16.38 7.14c-.05 0-.11 0-.16-.02a.765.765 0 0 1-.58-.89l.94-4.34c.09-.41.49-.66.89-.58.4.08.66.49.58.89l-.94 4.34c-.07.36-.38.6-.73.6ZM15.7 12.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.7 16.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                    />
                  </svg>
                </span>
                <span className="text-white whitespace-nowrap  mt-3 xl:hidden">
                  {" "}
                  منوی متنوع
                </span>
              </div>
            </div>{" "}
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 pr-32 pt-12  items-center justify-center  mx-auto gap-x-64 gap-y-24   xl:w-1/3 mt-3 ">
              <div className="flex flex-col items-center justify-center     ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M24 25.5c-6.34 0-11.5-5.16-11.5-11.5S17.66 2.5 24 2.5 35.5 7.66 35.5 14 30.34 25.5 24 25.5Zm0-20c-4.68 0-8.5 3.82-8.5 8.5s3.82 8.5 8.5 8.5 8.5-3.82 8.5-8.5-3.82-8.5-8.5-8.5ZM41.18 45.5c-.82 0-1.5-.68-1.5-1.5 0-6.9-7.04-12.5-15.68-12.5S8.32 37.1 8.32 44c0 .82-.68 1.5-1.5 1.5s-1.5-.68-1.5-1.5c0-8.54 8.38-15.5 18.68-15.5 10.3 0 18.68 6.96 18.68 15.5 0 .82-.68 1.5-1.5 1.5Z"
                    />
                  </svg>
                </span>
                <span className="text-white whitespace-nowrap mt-3 xl:hidden">
                  {" "}
                  پرسنلی مجرب و حرفه ای
                </span>
              </div>
              <div className="flex flex-col items-center justify-center     ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M44 45.5H10c-4.14 0-7.5-3.36-7.5-7.5V4c0-.82.68-1.5 1.5-1.5s1.5.68 1.5 1.5v34c0 2.48 2.02 4.5 4.5 4.5h34c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5Z"
                    />
                    <path
                      fill="#fff"
                      d="M10 35.5c-.34 0-.7-.12-.98-.36-.62-.54-.7-1.48-.16-2.12l9.18-10.72c1-1.16 2.44-1.86 3.96-1.92 1.52-.04 3.02.52 4.1 1.6l1.9 1.9c.5.5 1.14.74 1.86.74.7-.02 1.34-.34 1.8-.88l9.18-10.72c.54-.62 1.48-.7 2.12-.16.62.54.7 1.48.16 2.12L33.94 25.7c-1 1.16-2.44 1.86-3.96 1.92-1.54.04-3.02-.52-4.1-1.6L24 24.12c-.5-.5-1.16-.76-1.86-.74-.7.02-1.34.34-1.8.88l-9.18 10.72c-.32.34-.74.52-1.16.52Z"
                    />
                  </svg>
                </span>
                <span className="text-white whitespace-nowrap  mt-3 xl:hidden">
                  {" "}
                  کیفیت بالای غذا{" "}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center   ">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M44 45.5H10c-4.14 0-7.5-3.36-7.5-7.5V4c0-.82.68-1.5 1.5-1.5s1.5.68 1.5 1.5v34c0 2.48 2.02 4.5 4.5 4.5h34c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5Z"
                    />
                    <path
                      fill="#fff"
                      d="M10 35.5c-.34 0-.7-.12-.98-.36-.62-.54-.7-1.48-.16-2.12l9.18-10.72c1-1.16 2.44-1.86 3.96-1.92 1.52-.04 3.02.52 4.1 1.6l1.9 1.9c.5.5 1.14.74 1.86.74.7-.02 1.34-.34 1.8-.88l9.18-10.72c.54-.62 1.48-.7 2.12-.16.62.54.7 1.48.16 2.12L33.94 25.7c-1 1.16-2.44 1.86-3.96 1.92-1.54.04-3.02-.52-4.1-1.6L24 24.12c-.5-.5-1.16-.76-1.86-.74-.7.02-1.34.34-1.8.88l-9.18 10.72c-.32.34-.74.52-1.16.52Z"
                    />
                  </svg>
                </span>
                <span className="text-white whitespace-nowrap  mt-3 xl:hidden">
                  {" "}
                  محیطی دلنشین و ارام{" "}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center     ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M32.76 45.5H6.48c-1.9 0-3.66-.88-4.8-2.42a5.955 5.955 0 0 1-.92-5.38l8.42-27.06A5.964 5.964 0 0 1 14.9 6.4h24.6c2.42 0 4.6 1.44 5.52 3.68.5 1.16.6 2.48.3 3.78l-6.74 27.06a5.953 5.953 0 0 1-5.82 4.58ZM14.92 9.42a3 3 0 0 0-2.86 2.12L3.64 38.6c-.28.94-.12 1.92.48 2.72.56.76 1.44 1.2 2.38 1.2h26.28c1.38 0 2.58-.94 2.9-2.28l6.74-27.08c.16-.66.12-1.32-.14-1.9-.48-1.14-1.54-1.86-2.76-1.86h-24.6v.02Z"
                    />
                    <path
                      fill="#fff"
                      d="M41.56 45.5H32c-.82 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5h9.56c.82 0 1.58-.34 2.14-.94.56-.6.84-1.4.78-2.22L42.5 12.1c-.06-.82.56-1.54 1.38-1.6.82-.04 1.54.56 1.6 1.38l1.98 27.24c.12 1.64-.46 3.28-1.58 4.48a5.815 5.815 0 0 1-4.32 1.9ZM19.36 14.26c-.12 0-.24-.02-.36-.04-.8-.2-1.3-1-1.1-1.82l2.08-8.64c.2-.8 1-1.3 1.82-1.1.8.2 1.3 1 1.1 1.82l-2.08 8.64c-.16.68-.78 1.14-1.46 1.14ZM32.76 14.28c-.1 0-.22 0-.32-.04a1.53 1.53 0 0 1-1.16-1.78l1.88-8.68c.18-.82.98-1.32 1.78-1.16.8.16 1.32.98 1.16 1.78l-1.88 8.68c-.14.72-.76 1.2-1.46 1.2ZM31.4 25.5h-16c-.82 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5h16c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5ZM29.4 33.5h-16c-.82 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5h16c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5Z"
                    />
                  </svg>
                </span>
                <span className="text-white whitespace-nowrap  mt-3 xl:hidden">
                  {" "}
                  منوی متنوع
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
