import { useState } from "react";
import usegetfood from "../featuers/Home/usegetfood";
import { toPersianNumbersWithComma } from "../utils/toPersianNumbersWithComma";
import Loading from "./Loading";
import Map from "./Map";
import Address from "./Address";
import Addresswithmap from "./Addresswithmap";
function OrderStep_3( {Setstep}) {
  const [mark, setmark] = useState(true);
  const { data, isLoading } = usegetfood();

  console.log(mark);
    const [selected, setSelected] = useState("option1"); 
     if (isLoading) return <Loading />;
  return (
    <>
      <div className="flex items-center justify-center mt-8">
        {" "}
        <img src="../../public/photo/Position-1.png" alt="" />
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
                  className="flex items-center justify-between rounded-lg  bg-Gray-1 mt-1 px-2 py-2"
                >
                  <div className="flex flex-col ">
                    <span>{item.name}</span>
                    <span className="text-Gray-5">
                      {toPersianNumbersWithComma(item.price)} تومان
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-Tint-1 px-1 py-1 rounded-lg">
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
              <div className="text-Gray-7">63000تومان</div>
            </div>
            {/* <div className=" border-b flex items-center justify-between  py-3">
              <div className="">هزینه ارسال</div>
              <div className="text-Gray-7">15000تومان</div>
            </div> */}
            <div className="  flex items-center justify-between  py-3">
              <div className="">مبلغ قابل پرداخت</div>
              <div className="text-primary">63000تومان</div>
            </div>
            <button onClick={()=> Setstep(3)}  className="bg-primary flex items-center justify-center w-full py-2 text-white rounded-lg flex-row-reverse gap-2">
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
          <div className="flex items-center justify-between border p-6 rounded-lg">
            <div className="flex items-center flex-row-reverse gap-2 font-normal text-base">
              روش تحویل سفارش
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
              >
                <path
                  fill="#353535"
                  d="M13 15.25H2c-.41 0-.75-.34-.75-.75v-8c0-2.62 2.13-4.75 4.75-4.75h9c.41 0 .75.34.75.75v10c0 1.52-1.23 2.75-2.75 2.75Zm-10.25-1.5H13c.69 0 1.25-.56 1.25-1.25V3.25H6c-1.79 0-3.25 1.46-3.25 3.25v7.25Z"
                />
                <path
                  fill="#353535"
                  d="M19 21.25h-1c-.41 0-.75-.34-.75-.75a1.25 1.25 0 0 0-2.5 0c0 .41-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75a1.25 1.25 0 0 0-2.5 0c0 .41-.34.75-.75.75H5c-2.07 0-3.75-1.68-3.75-3.75v-3c0-.41.34-.75.75-.75h11c.69 0 1.25-.56 1.25-1.25v-7c0-.41.34-.75.75-.75h1.84c.99 0 1.9.53 2.39 1.39l1.71 2.99c.13.23.13.52 0 .75-.13.23-.38.37-.65.37H19c-.14 0-.25.11-.25.25v3c0 .14.11.25.25.25h3c.41 0 .75.34.75.75v3c0 2.07-1.68 3.75-3.75 3.75Zm-.35-1.5H19c1.24 0 2.25-1.01 2.25-2.25v-2.25H19c-.96 0-1.75-.79-1.75-1.75v-3c0-.96.78-1.75 1.75-1.75l-1.07-1.87c-.22-.39-.64-.63-1.09-.63h-1.09v6.25c0 1.52-1.23 2.75-2.75 2.75H2.75v2.25c0 1.24 1.01 2.25 2.25 2.25h.35c.33-1.15 1.39-2 2.65-2s2.32.85 2.65 2h2.71c.33-1.15 1.39-2 2.65-2s2.31.85 2.64 2Z"
                />
                <path
                  fill="#353535"
                  d="M8 23.25c-1.52 0-2.75-1.23-2.75-2.75S6.48 17.75 8 17.75s2.75 1.23 2.75 2.75S9.52 23.25 8 23.25Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM16 23.25c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM22 15.25h-3c-.96 0-1.75-.79-1.75-1.75v-3c0-.96.79-1.75 1.75-1.75h1.29c.27 0 .52.14.65.38l1.71 3c.06.11.1.24.1.37v2c0 .41-.34.75-.75.75Zm-3-5c-.14 0-.25.11-.25.25v3c0 .14.11.25.25.25h2.25V12.7l-1.4-2.45H19Z"
                />
              </svg>
            </div>

            {/* وسطی هستش  */}
            <div className="flex gap-2">
        <input
          type="radio"
          name="option"
          value="option1"
          checked={selected === "option1"}
          onChange={() => setSelected("option1")}
        />
              <div className=" flex flex-col">
                <div className="font-normal text-sm text-Gray-7">
                  ارسال توسط پیک
                </div>
                <div className=" text-xs text-Gray-7">
                  توسط پیک رستوران ارسال شود.
                </div>
              </div>
              <svg
                className="self-center"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
              >
                <path
                  fill="#717171"
                  d="M13 15.25h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.69 0 1.25-.56 1.25-1.25V3.25H6c-1.18 0-2.26.64-2.84 1.67-.2.36-.66.49-1.02.29a.753.753 0 0 1-.29-1.02C2.69 2.69 4.28 1.75 6 1.75h9c.41 0 .75.34.75.75v10c0 1.52-1.23 2.75-2.75 2.75Z"
                />
                <path
                  fill="#717171"
                  d="M19 21.25h-1c-.41 0-.75-.34-.75-.75a1.25 1.25 0 0 0-2.5 0c0 .41-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75a1.25 1.25 0 0 0-2.5 0c0 .41-.34.75-.75.75H5c-2.07 0-3.75-1.68-3.75-3.75 0-.41.34-.75.75-.75s.75.34.75.75c0 1.24 1.01 2.25 2.25 2.25h.35c.33-1.15 1.39-2 2.65-2s2.32.85 2.65 2h2.71c.33-1.15 1.39-2 2.65-2s2.32.85 2.65 2H19c1.24 0 2.25-1.01 2.25-2.25v-2.25H19c-.96 0-1.75-.79-1.75-1.75v-3c0-.96.78-1.75 1.75-1.75l-1.07-1.87c-.22-.39-.64-.63-1.09-.63h-1.09v6.25c0 1.52-1.23 2.75-2.75 2.75h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.69 0 1.25-.56 1.25-1.25v-7c0-.41.34-.75.75-.75h1.84c.99 0 1.9.53 2.39 1.39l1.71 2.99c.13.23.13.52 0 .75-.13.23-.38.37-.65.37H19c-.14 0-.25.11-.25.25v3c0 .14.11.25.25.25h3c.41 0 .75.34.75.75v3c0 2.07-1.68 3.75-3.75 3.75Z"
                />
                <path
                  fill="#717171"
                  d="M8 23.25c-1.52 0-2.75-1.23-2.75-2.75S6.48 17.75 8 17.75s2.75 1.23 2.75 2.75S9.52 23.25 8 23.25Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM16 23.25c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM22 15.25h-3c-.96 0-1.75-.79-1.75-1.75v-3c0-.96.79-1.75 1.75-1.75h1.29c.27 0 .52.14.65.38l1.71 3c.06.11.1.24.1.37v2c0 .41-.34.75-.75.75Zm-3-5c-.14 0-.25.11-.25.25v3c0 .14.11.25.25.25h2.25V12.7l-1.4-2.45H19ZM8 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM6 12.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM4 15.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                />
              </svg>
            </div>
            {/* دومی هستش  */}
            <div className="flex gap-2">
        <input
          type="radio"
          name="option"
          value="option2"
          checked={selected === "option2"}
          onChange={() => setSelected("option2")}
        />
              <div className=" flex flex-col">
                <div className="font-normal text-sm  text-Gray-7">
                  تحویل حضوری
                </div>
                <div className="text-xs text-Gray-7">
                  توسط پیک رستوران ارسال شود.
                </div>
              </div>
              <svg
                className="self-center "
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
              >
                <path
                  fill="#717171"
                  d="M16.99 23.25H8c-1.72 0-3.01-.46-3.81-1.37-.8-.91-1.11-2.23-.9-3.94l.9-7.5c.26-2.21.82-4.19 4.72-4.19h7.2c3.89 0 4.45 1.98 4.72 4.19l.9 7.5c.2 1.71-.1 3.04-.9 3.94-.83.91-2.11 1.37-3.84 1.37ZM8.9 7.75c-2.88 0-3.02 1.14-3.23 2.86l-.9 7.5c-.15 1.27.03 2.2.54 2.77.51.57 1.41.86 2.69.86h8.99c1.28 0 2.18-.29 2.69-.86.51-.57.69-1.5.54-2.77l-.9-7.5c-.21-1.73-.34-2.86-3.23-2.86H8.9Z"
                />
                <path
                  fill="#717171"
                  d="M16.5 9.25c-.41 0-.75-.34-.75-.75V5c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75v3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5c0-1.91 1.34-3.25 3.25-3.25h3c1.91 0 3.25 1.34 3.25 3.25v3.5c0 .41-.34.75-.75.75ZM20.91 18.28H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.41c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                />
              </svg>{" "}
            </div>
          </div>
          {/* برای دومی  */}

          {/* ادرس ها به صورت تک به تک  */}
          {selected === "option1" ? <Address /> : <Addresswithmap />}

          <div className="">
            {" "}
            <div className="border mt-3 p-4 rounded-lg h-[10.5rem] ">
              <textarea
                className=" w-full  "
                placeholder="توضیحات سفارش(اختیاری)"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderStep_3;
