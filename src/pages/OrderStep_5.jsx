import { useState } from "react";
import usegetfood from "../featuers/Home/usegetfood";
import Address from "../ui/Address";
import Addresswithmap from "../ui/Addresswithmap";
import Loading from "../ui/Loading";
import Payment from "../ui/Payment";
import { toPersianNumbersWithComma } from "../utils/toPersianNumbersWithComma";
import Knoe from "./Knoe";

function OrderStep_5({ Setstep }) {
  const { data, isLoading } = usegetfood();
  if (isLoading) return <Loading />;
    const [selected, setSelected] = useState("option2");
  return (
    <>
      <div className="flex items-center justify-center mt-8">
        {" "}
        <img src="/public/photo/Position-4.png" alt="" />
      </div>

      <div className="flex  flex-row-reverse px-10 mb-10">
        <div className="w-3/5 ">
          <div className="border p-4 mt-10 rounded-lg  ">
            <div className=" flex items-center justify-between  flex-row-reverse border-b pb-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
              >
                <path
                  fill="#353535"
                  d="M21 7.23h-.08c-5.29-.53-10.57-.73-15.8-.2l-2.04.2a.755.755 0 0 1-.83-.68c-.04-.42.26-.78.67-.82l2.04-.2c5.32-.54 10.71-.33 16.11.2.41.04.71.41.67.82a.74.74 0 0 1-.74.68Z"
                />
                <path
                  fill="#353535"
                  d="M8.5 6.22c-.04 0-.08 0-.13-.01a.753.753 0 0 1-.61-.86l.22-1.31c.16-.96.38-2.29 2.71-2.29h2.62c2.34 0 2.56 1.38 2.71 2.3l.22 1.3c.07.41-.21.8-.61.86-.41.07-.8-.21-.86-.61l-.22-1.3c-.14-.87-.17-1.04-1.23-1.04H10.7c-1.06 0-1.08.14-1.23 1.03l-.23 1.3a.75.75 0 0 1-.74.63ZM15.21 23.25H8.79c-3.49 0-3.63-1.93-3.74-3.49L4.4 9.69c-.03-.41.29-.77.7-.8.42-.02.77.29.8.7l.65 10.07c.11 1.52.15 2.09 2.24 2.09h6.42c2.1 0 2.14-.57 2.24-2.09l.65-10.07c.03-.41.39-.72.8-.7.41.03.73.38.7.8l-.65 10.07c-.11 1.56-.25 3.49-3.74 3.49Z"
                />
                <path
                  fill="#353535"
                  d="M13.66 17.75h-3.33c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 13.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                />
              </svg>
              <span> سبد خرید(4)</span>
            </div>

            <div className="h-[14rem] overflow-auto ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-sm  bg-Gray-1 mt-1 px-2 py-2"
                >
                  <div className="flex flex-col ">
                    <span>{item.name}</span>
                    <span className="text-Gray-5">
                      {toPersianNumbersWithComma(item.price)} تومان
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-Tint-1 px-1 py-1 rounded-sm">
                    <span className="text-primary">+</span>
                    <span className="text-primary">1</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        fill="none"
                      >
                        <path
                          fill="#417F56"
                          d="M14 4.986h-.053C10.42 4.633 6.9 4.5 3.414 4.853l-1.36.133a.503.503 0 0 1-.107-1l1.36-.133c3.547-.36 7.14-.22 10.74.133a.5.5 0 0 1 .447.547.494.494 0 0 1-.494.453Z"
                        />
                        <path
                          fill="#417F56"
                          d="M5.667 4.313c-.027 0-.054 0-.087-.007a.502.502 0 0 1-.407-.573l.147-.873c.107-.64.253-1.527 1.807-1.527h1.746c1.56 0 1.707.92 1.807 1.533l.146.867a.495.495 0 0 1-.406.573.495.495 0 0 1-.573-.406L9.7 3.033c-.093-.58-.113-.693-.82-.693H7.133c-.706 0-.72.093-.82.686l-.153.867a.5.5 0 0 1-.493.42ZM10.14 15.667H5.86c-2.327 0-2.42-1.287-2.494-2.327l-.433-6.713a.505.505 0 0 1 .467-.534.505.505 0 0 1 .533.467l.433 6.713c.074 1.014.1 1.394 1.494 1.394h4.28c1.4 0 1.426-.38 1.493-1.394l.433-6.713a.51.51 0 0 1 .534-.467.5.5 0 0 1 .466.534l-.433 6.713c-.073 1.04-.167 2.327-2.493 2.327Z"
                        />
                        <path
                          fill="#417F56"
                          d="M9.107 12h-2.22a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5h2.22c.273 0 .5.227.5.5s-.227.5-.5.5ZM9.666 9.333H6.333a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h3.333c.274 0 .5.227.5.5s-.226.5-.5.5Z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className=" border-b mt-2 flex items-center justify-between py-3">
              <div className="">تخفیف محصولات</div>
              <div className="">63000تومان</div>
            </div>
            <div className=" border-b flex items-center justify-between  py-3">
              <div className="">هزینه ارسال</div>
              <div className="">63000تومان</div>
            </div>
            <div className="  flex items-center justify-between  py-3">
              <div className="">مبلغ قابل پرداخت</div>
              <div className="text-primary">63000تومان</div>
            </div>
            <button
              onClick={() => Setstep(4)}
              className="bg-primary flex items-center justify-center w-full py-2 text-white rounded-md flex-row-reverse gap-2"
            >
              ثبت سفارش{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M8.5 15.166A7.173 7.173 0 0 1 1.335 8 7.173 7.173 0 0 1 8.501.833 7.173 7.173 0 0 1 15.667 8a7.173 7.173 0 0 1-7.166 7.166Zm0-13.333A6.174 6.174 0 0 0 2.335 8c0 3.4 2.767 6.166 6.167 6.166S14.667 11.4 14.667 8c0-3.4-2.766-6.167-6.166-6.167Z"
                />
                <path
                  fill="#fff"
                  d="M7.553 10.387a.5.5 0 0 1-.353-.147L5.313 8.353a.503.503 0 0 1 0-.706.503.503 0 0 1 .707 0L7.553 9.18l3.427-3.427a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .707l-3.78 3.78a.5.5 0 0 1-.353.147Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-3/4 flex flex-col mt-10 ml-2">
          <div className="flex items-center gap-5 border pr-6 pl-20 py-6 rounded-md">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
              >
                <path
                  fill="#353535"
                  d="M12 23.25c-.63 0-1.22-.24-1.66-.69l-1.52-1.52c-.12-.12-.44-.25-.6-.25H6.06c-1.3 0-2.35-1.05-2.35-2.35v-2.16c0-.16-.13-.48-.25-.6l-1.52-1.52c-.44-.44-.69-1.03-.69-1.66 0-.63.24-1.22.69-1.66l1.52-1.52c.12-.12.25-.44.25-.6V6.56c0-1.3 1.05-2.35 2.35-2.35h2.16c.16 0 .48-.13.6-.25l1.52-1.52c.88-.88 2.44-.88 3.32 0l1.52 1.52c.12.12.44.25.6.25h2.16c1.3 0 2.35 1.05 2.35 2.35v2.16c0 .16.13.48.25.6l1.52 1.52c.44.44.69 1.03.69 1.66 0 .63-.24 1.22-.69 1.66l-1.52 1.52c-.12.12-.25.44-.25.6v2.16c0 1.3-1.05 2.35-2.35 2.35h-2.16c-.16 0-.48.13-.6.25l-1.52 1.52c-.44.45-1.03.69-1.66.69Zm-7.48-8.63c.4.4.69 1.1.69 1.66v2.16c0 .47.38.85.85.85h2.16c.56 0 1.26.29 1.66.69l1.52 1.52c.32.32.88.32 1.2 0l1.52-1.52c.4-.4 1.1-.69 1.66-.69h2.16c.47 0 .85-.38.85-.85v-2.16c0-.56.29-1.26.69-1.66L21 13.1a.84.84 0 0 0 .25-.6c0-.23-.09-.44-.25-.6l-1.52-1.52c-.4-.4-.69-1.1-.69-1.66V6.56a.85.85 0 0 0-.85-.85h-2.16c-.56 0-1.26-.29-1.66-.69L12.6 3.5a.87.87 0 0 0-1.2 0L9.88 5.02c-.4.4-1.1.69-1.66.69H6.06a.85.85 0 0 0-.85.85v2.16c0 .56-.29 1.26-.69 1.66L3 11.9c-.16.16-.25.37-.25.6 0 .23.09.44.25.6l1.52 1.52Z"
                />
                <path
                  fill="#353535"
                  d="M15 16.5c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-.99 1ZM9.01 10.5c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-.99 1ZM9 16.25c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22Z"
                />
              </svg>
              <div className="text-nowrap ">ثبت کد تخفیف</div>
            </div>
            <div className="border rounded-md p-3 w-full">
              <input type="text" placeholder="کد تخفیف " />
            </div>
            <button className="text-nowrap bg-Gray-4 rounded-sm pr-8 pl-4 py-2 text-white">
              ثبت کد{" "}
            </button>
          </div>
          <div className="flex items-center justify-between border rounded-md py-8 pl-16 pr-6 mt-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
              >
                <path
                  fill="#353535"
                  d="M7.17 23.25c-2.38 0-4.33-1.73-4.33-3.86v-2.04c0-.41.34-.75.75-.75s.75.34.75.75c0 1.25 1.21 2.19 2.83 2.19S10 18.6 10 17.35c0-.41.34-.75.75-.75s.75.34.75.75v2.04c0 2.13-1.94 3.86-4.33 3.86ZM4.6 20.37c.44.82 1.43 1.38 2.57 1.38s2.13-.57 2.57-1.38c-.71.43-1.59.68-2.57.68-.98 0-1.86-.25-2.57-.68Z"
                />
                <path
                  fill="#353535"
                  d="M7.17 18.3c-1.64 0-3.11-.75-3.84-1.94-.32-.52-.49-1.13-.49-1.75 0-1.05.46-2.03 1.3-2.76 1.62-1.42 4.41-1.42 6.04-.01.84.74 1.31 1.72 1.31 2.77 0 .62-.17 1.23-.49 1.75-.72 1.19-2.19 1.94-3.83 1.94Zm0-6.05c-.78 0-1.5.26-2.04.73-.51.44-.79 1.02-.79 1.63 0 .35.09.67.27.97.46.76 1.44 1.23 2.56 1.23s2.1-.47 2.55-1.22c.18-.29.27-.62.27-.97 0-.61-.28-1.19-.79-1.64-.53-.47-1.25-.73-2.03-.73Z"
                />
                <path
                  fill="#353535"
                  d="M7.17 21.05c-2.47 0-4.33-1.59-4.33-3.69v-2.75c0-2.13 1.94-3.86 4.33-3.86 1.13 0 2.21.39 3.02 1.09.84.74 1.31 1.72 1.31 2.77v2.75c0 2.1-1.86 3.69-4.33 3.69Zm0-8.8c-1.56 0-2.83 1.06-2.83 2.36v2.75c0 1.25 1.21 2.19 2.83 2.19S10 18.61 10 17.36v-2.75c0-.61-.28-1.19-.79-1.64-.54-.46-1.26-.72-2.04-.72ZM19.04 15.3c-1.51 0-2.79-1.12-2.91-2.56-.08-.83.22-1.64.82-2.23.5-.52 1.21-.81 1.96-.81H21c.99.03 1.75.81 1.75 1.77v2.06c0 .96-.76 1.74-1.72 1.77h-1.99Zm1.93-4.1h-2.05c-.35 0-.67.13-.9.37-.29.28-.43.66-.39 1.04.05.66.69 1.19 1.41 1.19H21c.13 0 .25-.12.25-.27v-2.06c0-.15-.12-.26-.28-.27Z"
                />
                <path
                  fill="#353535"
                  d="M16 21.75h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H16c2.58 0 4.25-1.67 4.25-4.25v-.7h-1.21c-1.51 0-2.79-1.12-2.91-2.56-.08-.83.22-1.64.82-2.23.5-.52 1.21-.81 1.96-.81h1.33V9c0-2.34-1.37-3.95-3.59-4.21-.24-.04-.45-.04-.66-.04h-9c-.24 0-.47.02-.7.05-2.2.28-3.55 1.88-3.55 4.2v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-3.08 1.9-5.31 4.85-5.68.27-.04.58-.07.9-.07h9c.24 0 .55.01.87.06 2.95.34 4.88 2.58 4.88 5.69v1.45c0 .41-.34.75-.75.75h-2.08c-.35 0-.67.13-.9.37-.29.28-.43.66-.39 1.04.05.66.69 1.19 1.41 1.19H21c.41 0 .75.34.75.75V16c0 3.44-2.31 5.75-5.75 5.75Z"
                />
              </svg>
              <div className="">روش پرداخت</div>
            </div>
            {/* در رابطه با وسطی هستش  */}
            <div className="flex items-center mr-3 gap-3 text-Gray-7">
              <input
                type="radio"
                name="option"
                value="option1"
                checked={selected === "option1"}
                onChange={() => setSelected("option1")}
              />
              <div className="flex items-center flex-col">
                <div className="">پرداخت اینترنتی</div>
                <div className="text-[10px]">توسط پیک رستوران ارسال شود.</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
              >
                <path
                  fill="#717171"
                  d="M3.93 17.13c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L15.35 3.9c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L4.46 16.92c-.14.14-.34.21-.53.21ZM11.1 19.53c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.2-1.2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.2 1.2a.75.75 0 0 1-.53.22ZM13.79 16.84c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.39-2.39c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.39 2.39c-.14.14-.34.22-.53.22Z"
                />
                <path
                  fill="#717171"
                  d="M11.1 23.25c-.98 0-1.96-.6-3.15-1.79l-4.91-4.91c-2.39-2.39-2.38-3.93.03-6.34l6.64-6.64c2.41-2.41 3.95-2.42 6.34-.03l4.91 4.91c2.39 2.39 2.38 3.93-.03 6.34l-6.64 6.64c-1.21 1.21-2.2 1.82-3.19 1.82Zm1.8-20c-.52 0-1.18.43-2.13 1.38l-6.64 6.64c-.95.95-1.38 1.61-1.38 2.12 0 .52.4 1.15 1.35 2.1l4.91 4.91c.95.95 1.57 1.35 2.09 1.35h.01c.52 0 1.17-.43 2.12-1.38l6.64-6.64c.95-.95 1.38-1.61 1.38-2.12 0-.52-.4-1.15-1.35-2.1L14.99 4.6c-.94-.95-1.57-1.35-2.09-1.35Z"
                />
                <path
                  fill="#717171"
                  d="M22 23.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                />
              </svg>
            </div>
            {/* برای دوم هستش  */}
            <div className="flex items-center mr-3  gap-3 text-Gray-7">
              <input
                type="radio"
                name="option"
                value="option2"
                checked={selected === "option2"}
                onChange={() => setSelected("option2")}
              />
              <div className="flex items-center flex-col">
                <div className="">پرداخت در محل</div>
                <div className="text-[10px]">توسط پیک رستوران ارسال شود.</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
              >
                <path
                  fill="#717171"
                  d="M13.5 10.25h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.54 15.3c-1.51 0-2.79-1.12-2.91-2.56-.08-.83.22-1.64.82-2.23.5-.52 1.21-.81 1.96-.81h2.09c.99.03 1.75.81 1.75 1.77v2.06c0 .96-.76 1.74-1.72 1.77h-1.99Zm1.93-4.1h-2.05c-.35 0-.67.13-.9.37-.29.28-.43.66-.39 1.04.05.66.69 1.19 1.41 1.19h1.96c.13 0 .25-.12.25-.27v-2.06c0-.15-.12-.26-.28-.27Z"
                />
                <path
                  fill="#717171"
                  d="M16.5 21.75h-9c-3.44 0-5.75-2.31-5.75-5.75V9c0-3.08 1.9-5.31 4.85-5.68.27-.04.58-.07.9-.07h9c.24 0 .55.01.87.06 2.95.34 4.88 2.58 4.88 5.69v1.45c0 .41-.34.75-.75.75h-2.08c-.35 0-.67.13-.9.37l-.01.01c-.28.27-.41.64-.38 1.02.05.66.69 1.19 1.41 1.19h1.96c.41 0 .75.34.75.75v1.45c0 3.45-2.31 5.76-5.75 5.76Zm-9-17c-.24 0-.47.02-.7.05-2.2.28-3.55 1.88-3.55 4.2v7c0 2.58 1.67 4.25 4.25 4.25h9c2.58 0 4.25-1.67 4.25-4.25v-.7h-1.21c-1.51 0-2.79-1.12-2.91-2.56-.08-.82.22-1.64.82-2.22.52-.53 1.22-.82 1.97-.82h1.33V9c0-2.34-1.37-3.95-3.59-4.21-.24-.04-.45-.04-.66-.04h-9Z"
                />
              </svg>
            </div>
          </div>
          {/* نهاییی  */}
{selected == "option2"?<Knoe/>:< Payment/>}

        </div>
      </div>
    </>
  );
}

export default OrderStep_5;

