import { useState } from "react";
import usegetfood from "../featuers/Home/usegetfood";
import Loading from "./Loading";
import Address from "./Address";
import Addresswithmap from "./Addresswithmap";

function OrderStep_4({ Setstep }) {
  const { data, isLoading } = usegetfood();
  const [selected, setSelected] = useState("option2");
  if (isLoading) return <Loading />;
  return (
    <div className="p-4 mt-4">
      <div className="flex relative items-center  justify-between   ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
          تکمیل اطلاعات{" "}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
        >
          <path
            fill="#353535"
            d="M5.94 13.78a.495.495 0 0 1-.354-.147.503.503 0 0 1 0-.706L9.933 8.58a.82.82 0 0 0 0-1.16L5.586 3.073a.503.503 0 0 1 0-.706.503.503 0 0 1 .707 0l4.347 4.346c.34.34.533.8.533 1.287 0 .487-.187.947-.533 1.287l-4.347 4.346a.524.524 0 0 1-.353.147Z"
          />
        </svg>
      </div>
      <div className=" border  my-4 px-3 py-2 rounded-lg">
        <div className="flex items-center justify-start gap-x-2 py-2   border-b">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            fill="none"
          >
            <path
              fill="#353535"
              d="M8.667 10.333H1.334a.504.504 0 0 1-.5-.5V4.5a3.17 3.17 0 0 1 3.167-3.167h6c.273 0 .5.227.5.5V8.5c0 1.013-.82 1.833-1.834 1.833Zm-6.833-1h6.833c.46 0 .834-.373.834-.833V2.333H4A2.17 2.17 0 0 0 1.834 4.5v4.833Z"
            />
            <path
              fill="#353535"
              d="M12.667 14.333h-.666a.504.504 0 0 1-.5-.5.834.834 0 0 0-1.667 0c0 .273-.227.5-.5.5H6.667a.504.504 0 0 1-.5-.5.834.834 0 0 0-1.666 0c0 .273-.227.5-.5.5h-.667a2.5 2.5 0 0 1-2.5-2.5v-2c0-.273.227-.5.5-.5h7.333c.46 0 .834-.373.834-.833V3.833c0-.273.226-.5.5-.5h1.226c.66 0 1.267.353 1.594.927l1.14 1.993a.496.496 0 0 1-.433.747h-.86a.165.165 0 0 0-.167.166v2c0 .094.073.167.166.167h2c.274 0 .5.227.5.5v2a2.5 2.5 0 0 1-2.5 2.5Zm-.233-1h.233c.827 0 1.5-.673 1.5-1.5v-1.5h-1.5c-.64 0-1.166-.527-1.166-1.167v-2c0-.64.52-1.166 1.166-1.166l-.713-1.247a.835.835 0 0 0-.727-.42h-.726V8.5c0 1.013-.82 1.833-1.834 1.833H1.834v1.5c0 .827.673 1.5 1.5 1.5h.233A1.842 1.842 0 0 1 5.334 12c.84 0 1.547.566 1.767 1.333h1.806A1.842 1.842 0 0 1 10.674 12c.84 0 1.54.566 1.76 1.333Z"
            />
            <path
              fill="#353535"
              d="M5.333 15.667a1.832 1.832 0 1 1 0-3.667 1.832 1.832 0 1 1 0 3.667Zm0-2.667a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667ZM10.667 15.667a1.832 1.832 0 1 1 0-3.667 1.832 1.832 0 1 1 0 3.667Zm0-2.667a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667ZM14.667 10.333h-2c-.64 0-1.167-.526-1.167-1.166v-2c0-.64.527-1.167 1.167-1.167h.86c.18 0 .346.093.433.253l1.14 2c.04.074.067.16.067.247v1.333c0 .274-.227.5-.5.5Zm-2-3.333a.165.165 0 0 0-.167.167v2c0 .093.073.166.167.166h1.5v-.7L13.233 7h-.566Z"
            />
          </svg>
          <div className="">روش تحویل سفارش</div>
        </div>
        <div className=" mt-4 p-2.5 rounded-lg ">
          <div className="flex items-center gap-3 mb-1.5 ">
            {" "}
            <input
              type="checkbox"
              checked={selected === "option1"}
              onChange={() => setSelected("option1")}
              class="appearance-none ring-1 ring-Gray-5 w-3 h-3 rounded-full border  checked:bg-SuccessLight "
              name=""
              id=""
            />
            <div className="text-Gray-7">ارسال توسط پیک</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                fill="#717171"
                d="M8.666 9.833h-.667a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h.667c.46 0 .833-.373.833-.833V1.833H4c-.786 0-1.506.427-1.893 1.113a.502.502 0 0 1-.68.194.502.502 0 0 1-.193-.68c.56-1 1.62-1.627 2.766-1.627h6c.274 0 .5.227.5.5V8c0 1.013-.82 1.833-1.833 1.833Z"
              />
              <path
                fill="#717171"
                d="M12.667 13.833h-.666a.504.504 0 0 1-.5-.5.834.834 0 0 0-1.667 0c0 .273-.227.5-.5.5H6.667a.504.504 0 0 1-.5-.5.834.834 0 0 0-1.666 0c0 .273-.227.5-.5.5h-.667a2.5 2.5 0 0 1-2.5-2.5c0-.273.227-.5.5-.5s.5.227.5.5c0 .827.673 1.5 1.5 1.5h.233A1.842 1.842 0 0 1 5.334 11.5c.84 0 1.547.566 1.767 1.333h1.806a1.842 1.842 0 0 1 1.767-1.333c.84 0 1.547.566 1.767 1.333h.226c.827 0 1.5-.673 1.5-1.5v-1.5h-1.5c-.64 0-1.166-.527-1.166-1.167v-2c0-.64.52-1.166 1.166-1.166l-.713-1.247a.835.835 0 0 0-.727-.42h-.726V8c0 1.013-.82 1.833-1.834 1.833h-.666a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5h.666c.46 0 .834-.373.834-.833V3.333c0-.273.226-.5.5-.5h1.226c.66 0 1.267.353 1.594.927l1.14 1.993a.496.496 0 0 1-.433.747h-.86a.165.165 0 0 0-.167.166v2c0 .094.073.167.166.167h2c.274 0 .5.227.5.5v2a2.5 2.5 0 0 1-2.5 2.5Z"
              />
              <path
                fill="#717171"
                d="M5.333 15.167a1.832 1.832 0 1 1 0-3.667 1.832 1.832 0 1 1 0 3.667Zm0-2.667a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667ZM10.667 15.167a1.832 1.832 0 1 1 0-3.667 1.832 1.832 0 1 1 0 3.667Zm0-2.667a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667ZM14.667 9.833h-2c-.64 0-1.167-.526-1.167-1.166v-2c0-.64.527-1.167 1.167-1.167h.86c.18 0 .346.093.433.253l1.14 2c.04.074.067.16.067.247v1.333c0 .274-.227.5-.5.5Zm-2-3.333a.165.165 0 0 0-.167.167v2c0 .093.073.166.167.166h1.5v-.7L13.233 6.5h-.566ZM5.334 5.833h-4a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h4c.273 0 .5.227.5.5s-.227.5-.5.5ZM4 7.833H1.335a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h2.667c.273 0 .5.227.5.5s-.227.5-.5.5ZM2.667 9.833H1.334a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h1.333c.274 0 .5.227.5.5s-.226.5-.5.5Z"
              />
            </svg>
          </div>
          <div className="flex items-center gap-3">
            {" "}
            <input
              checked={selected === "option2"}
              onChange={() => setSelected("option2")}
              type="checkbox"
              class="appearance-none ring-1 ring-Gray-5 w-3 h-3 rounded-full border  checked:bg-SuccessLight "
              name=""
              id=""
            />
            <div className="text-Gray-7">تحویل حضوری</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              className="rounded-lg"
            >
              <path
                fill="#717171"
                d="M10.992 15.166H5c-1.147 0-2.007-.306-2.54-.913-.533-.607-.74-1.487-.6-2.627l.6-5c.173-1.473.547-2.793 3.147-2.793h4.8c2.593 0 2.966 1.32 3.146 2.793l.6 5c.134 1.14-.066 2.027-.6 2.627-.553.607-1.406.913-2.56.913ZM5.6 4.833c-1.92 0-2.013.76-2.153 1.907l-.6 5c-.1.846.02 1.466.36 1.846.34.38.94.574 1.793.574h5.993c.854 0 1.454-.194 1.794-.574.34-.38.46-1 .36-1.846l-.6-5c-.14-1.154-.227-1.907-2.154-1.907H5.6Z"
              />
              <path
                fill="#717171"
                d="M10.667 5.833a.504.504 0 0 1-.5-.5V3c0-.72-.446-1.167-1.166-1.167H7c-.72 0-1.167.447-1.167 1.167v2.333c0 .273-.227.5-.5.5a.504.504 0 0 1-.5-.5V3c0-1.274.893-2.167 2.167-2.167h2c1.273 0 2.166.893 2.166 2.167v2.333c0 .273-.226.5-.5.5ZM13.607 11.854H5.334a.504.504 0 0 1-.5-.5c0-.274.227-.5.5-.5h8.273c.274 0 .5.226.5.5 0 .273-.226.5-.5.5Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className=" border  px-3 py-2 rounded-lg">


        {selected === "option1" ? (
          <>
            {" "}
            <div className="flex items-center justify-between border-b p-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  fill="none"
                >
                  <path
                    fill="#353535"
                    d="M8 9.946a2.576 2.576 0 1 1 0-5.153 2.576 2.576 0 1 1 0 5.153Zm0-4.153a1.58 1.58 0 1 0-.002 3.162A1.58 1.58 0 0 0 8 5.793Z"
                  />
                  <path
                    fill="#353535"
                    d="M8 15.673a3.98 3.98 0 0 1-2.754-1.113c-1.967-1.894-4.14-4.914-3.32-8.507.74-3.26 3.586-4.72 6.073-4.72h.007c2.486 0 5.333 1.46 6.073 4.727.813 3.593-1.36 6.606-3.327 8.5A3.98 3.98 0 0 1 8 15.673Zm0-13.34c-1.94 0-4.434 1.033-5.094 3.94-.72 3.14 1.253 5.847 3.04 7.56a2.95 2.95 0 0 0 4.113 0c1.78-1.713 3.754-4.42 3.047-7.56-.667-2.907-3.167-3.94-5.107-3.94Z"
                  />
                </svg>
                <div className="">آدرس‌ها</div>
              </div>
              <div className="flex items-center flex-row-reverse">
                <div className="">افزودن آدرس</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="none"
                >
                  <path
                    fill="#417F56"
                    d="M6.247 16.381a7.173 7.173 0 0 1 0-10.135 7.173 7.173 0 0 1 10.135 0 7.173 7.173 0 0 1 0 10.135 7.173 7.173 0 0 1-10.135 0Zm9.428-9.428a6.174 6.174 0 0 0-8.721 0 6.174 6.174 0 0 0 0 8.721 6.174 6.174 0 0 0 8.72 0 6.174 6.174 0 0 0 0-8.72Z"
                  />
                  <path
                    fill="#417F56"
                    d="M8.293 11.667a.495.495 0 0 1-.146-.354c0-.273.226-.5.5-.5h5.336c.273 0 .5.227.5.5 0 .274-.227.5-.5.5H8.646a.484.484 0 0 1-.353-.146Z"
                  />
                  <path
                    fill="#417F56"
                    d="M10.96 14.335a.494.494 0 0 1-.145-.354V8.646c0-.273.226-.5.5-.5.273 0 .5.227.5.5v5.337c0 .273-.227.5-.5.5a.494.494 0 0 1-.354-.147Z"
                  />
                </svg>
              </div>
            </div>
            {/*    بخش نوشتن ادرس ها که به صورت باکس هستش   */}
            <div className="border rounded-lg mt-3 bg-Gray-3 p-4">
              <div className="flex items-center justify-between flex-row-reverse">
                <div className="flex items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      fill="#353535"
                      d="M14 4.486h-.053C10.42 4.133 6.9 4 3.414 4.353l-1.36.133a.503.503 0 0 1-.107-1l1.36-.133c3.547-.36 7.14-.22 10.74.133a.5.5 0 0 1 .447.547.494.494 0 0 1-.494.453Z"
                    />
                    <path
                      fill="#353535"
                      d="M5.667 3.813c-.027 0-.054 0-.087-.007a.502.502 0 0 1-.407-.573l.147-.873c.107-.64.253-1.527 1.807-1.527h1.746c1.56 0 1.707.92 1.807 1.533l.146.867a.495.495 0 0 1-.406.573.495.495 0 0 1-.573-.406L9.7 2.533c-.093-.58-.113-.693-.82-.693H7.133c-.706 0-.72.093-.82.686l-.153.867a.5.5 0 0 1-.493.42ZM10.14 15.167H5.86c-2.327 0-2.42-1.287-2.494-2.327l-.433-6.713a.505.505 0 0 1 .467-.534.505.505 0 0 1 .533.467l.433 6.713c.074 1.014.1 1.394 1.494 1.394h4.28c1.4 0 1.426-.38 1.493-1.394l.433-6.713a.51.51 0 0 1 .534-.467.5.5 0 0 1 .466.534l-.433 6.713c-.073 1.04-.167 2.327-2.493 2.327Z"
                    />
                    <path
                      fill="#353535"
                      d="M9.107 11.5h-2.22a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5h2.22c.273 0 .5.227.5.5s-.227.5-.5.5ZM9.667 8.833H6.334a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h3.333c.274 0 .5.227.5.5s-.226.5-.5.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      fill="#353535"
                      d="M3.693 13.014c-.406 0-.786-.14-1.06-.4-.346-.327-.513-.82-.453-1.354l.247-2.16c.046-.406.293-.946.58-1.24L8.48 2.067C9.847.62 11.273.58 12.72 1.947s1.487 2.793.12 4.24L7.367 11.98c-.28.3-.8.58-1.207.647l-2.147.367c-.113.006-.213.02-.32.02ZM10.62 1.94c-.513 0-.96.32-1.413.8l-5.474 5.8c-.133.14-.286.474-.313.667l-.247 2.16c-.026.22.027.4.147.513.12.114.3.154.52.12l2.147-.366a1.49 1.49 0 0 0 .646-.347l5.474-5.793c.826-.88 1.126-1.694-.08-2.827-.534-.513-.994-.727-1.407-.727Z"
                    />
                    <path
                      fill="#353535"
                      d="M11.56 7.3h-.046a4.573 4.573 0 0 1-4.073-3.853.508.508 0 0 1 .42-.573.508.508 0 0 1 .573.42 3.581 3.581 0 0 0 3.187 3.013.5.5 0 0 1 .447.547.516.516 0 0 1-.507.446ZM14 15.167H2a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h12c.273 0 .5.227.5.5s-.227.5-.5.5Z"
                    />
                  </svg>
                </div>
                <div className="pt-3">
                  تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="">محل کار</div>
                <div className="">سردار وظیفه</div>
                <div className="">۰۹۱۴ ۸۶۴ ۳۳۵۰</div>
              </div>
            </div>
            {/* 2 */}
            <div className="border-primary border-2 rounded-lg mt-3 bg-Gray-3 p-4">
              <div className="flex items-center justify-between flex-row-reverse">
                <div className="flex items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      fill="#353535"
                      d="M14 4.486h-.053C10.42 4.133 6.9 4 3.414 4.353l-1.36.133a.503.503 0 0 1-.107-1l1.36-.133c3.547-.36 7.14-.22 10.74.133a.5.5 0 0 1 .447.547.494.494 0 0 1-.494.453Z"
                    />
                    <path
                      fill="#353535"
                      d="M5.667 3.813c-.027 0-.054 0-.087-.007a.502.502 0 0 1-.407-.573l.147-.873c.107-.64.253-1.527 1.807-1.527h1.746c1.56 0 1.707.92 1.807 1.533l.146.867a.495.495 0 0 1-.406.573.495.495 0 0 1-.573-.406L9.7 2.533c-.093-.58-.113-.693-.82-.693H7.133c-.706 0-.72.093-.82.686l-.153.867a.5.5 0 0 1-.493.42ZM10.14 15.167H5.86c-2.327 0-2.42-1.287-2.494-2.327l-.433-6.713a.505.505 0 0 1 .467-.534.505.505 0 0 1 .533.467l.433 6.713c.074 1.014.1 1.394 1.494 1.394h4.28c1.4 0 1.426-.38 1.493-1.394l.433-6.713a.51.51 0 0 1 .534-.467.5.5 0 0 1 .466.534l-.433 6.713c-.073 1.04-.167 2.327-2.493 2.327Z"
                    />
                    <path
                      fill="#353535"
                      d="M9.107 11.5h-2.22a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5h2.22c.273 0 .5.227.5.5s-.227.5-.5.5ZM9.667 8.833H6.334a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h3.333c.274 0 .5.227.5.5s-.226.5-.5.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      fill="#353535"
                      d="M3.693 13.014c-.406 0-.786-.14-1.06-.4-.346-.327-.513-.82-.453-1.354l.247-2.16c.046-.406.293-.946.58-1.24L8.48 2.067C9.847.62 11.273.58 12.72 1.947s1.487 2.793.12 4.24L7.367 11.98c-.28.3-.8.58-1.207.647l-2.147.367c-.113.006-.213.02-.32.02ZM10.62 1.94c-.513 0-.96.32-1.413.8l-5.474 5.8c-.133.14-.286.474-.313.667l-.247 2.16c-.026.22.027.4.147.513.12.114.3.154.52.12l2.147-.366a1.49 1.49 0 0 0 .646-.347l5.474-5.793c.826-.88 1.126-1.694-.08-2.827-.534-.513-.994-.727-1.407-.727Z"
                    />
                    <path
                      fill="#353535"
                      d="M11.56 7.3h-.046a4.573 4.573 0 0 1-4.073-3.853.508.508 0 0 1 .42-.573.508.508 0 0 1 .573.42 3.581 3.581 0 0 0 3.187 3.013.5.5 0 0 1 .447.547.516.516 0 0 1-.507.446ZM14 15.167H2a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h12c.273 0 .5.227.5.5s-.227.5-.5.5Z"
                    />
                  </svg>
                </div>
                <div className="pt-3">
                  تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="">محل کار</div>
                <div className="">سردار وظیفه</div>
                <div className="">۰۹۱۴ ۸۶۴ ۳۳۵۰</div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex  items-center gap-2 p-4 border-2 w-full  my-2 rounded-md">
            <div className="flex flex-col items-start w-full justify-between h-full">
              <div className="flex w-full items-center justify-start ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                >
                  <path
                    fill="#353535"
                    d="M12 14.67c-2.13 0-3.87-1.73-3.87-3.87S9.87 6.94 12 6.94s3.87 1.73 3.87 3.87-1.74 3.86-3.87 3.86Zm0-6.23c-1.3 0-2.37 1.06-2.37 2.37s1.06 2.37 2.37 2.37 2.37-1.06 2.37-2.37S13.3 8.44 12 8.44Z"
                  />
                  <path
                    fill="#353535"
                    d="M12 23.26a5.97 5.97 0 0 1-4.13-1.67c-2.95-2.84-6.21-7.37-4.98-12.76C4 3.94 8.27 1.75 12 1.75h.01c3.73 0 8 2.19 9.11 7.09 1.22 5.39-2.04 9.91-4.99 12.75A5.97 5.97 0 0 1 12 23.26Zm0-20.01c-2.91 0-6.65 1.55-7.64 5.91-1.08 4.71 1.88 8.77 4.56 11.34a4.426 4.426 0 0 0 6.17 0c2.67-2.57 5.63-6.63 4.57-11.34-1-4.36-4.75-5.91-7.66-5.91Z"
                  />
                </svg>
                <div className="text-xl border-b w-full  py-3 ">آدرس شعبه اکباتان</div>
                <hr/>
              </div>
              <div className="text-Gray-7 text-normal border-t py-3 w-full">
                <div className="">
                  اکباتان، خیابان ریاحی، کوچه سیزدهم، ساختمان آیسا، طبقه همکف
                </div>
                <div className="">شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</div>
                <div className="">شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </div>
                <div className="">
                  ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
                </div>
              </div>

            </div>{" "}
          </div>
        )}
      </div>
      <div className="border mt-3 p-4 rounded-lg">
        <textarea
          className=" w-full  "
          placeholder="توضیحات سفارش(اختیاری)"
          name=""
          id=""
        ></textarea>
      </div>
      {/* بخش اخر  */}
      <div className="border p-4 mt-2 rounded-lg">
        <div className=" border-b flex items-center justify-between py-3">
          <div className="">تخفیف محصولات</div>
          <div className="text-Gray-7">63000تومان</div>
        </div>
        {/* <div className=" border-b flex items-center justify-between  py-3">
          <div className="">هزینه ارسال</div>
          <div className="text-Gray-7">29000تومان</div>
        </div> */}
        <div className="  flex items-center justify-between  py-3">
          <div className="">مبلغ قابل پرداخت</div>
          <div className="text-primary">63000تومان</div>
        </div>
        <button
          onClick={() => Setstep(3)}
          className="bg-primary flex items-center justify-center w-full py-2 text-white rounded-lg flex-row-reverse gap-2"
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
  );
}

export default OrderStep_4;
