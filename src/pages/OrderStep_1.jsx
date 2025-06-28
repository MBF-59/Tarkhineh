import usegetfood from "../featuers/Home/usegetfood";
import Loading from "../ui/Loading";
import Totalprice from "../ui/Totalprice";
import { toPersianNumbersWithComma } from "../utils/toPersianNumbersWithComma";

function OrderStep_1({Setstep}) {
  const { data, isLoading } = usegetfood();
  if (isLoading) return <Loading />;
const totalPrice = data.reduce((acc, data) => acc + data.price_after_discount, 0);

const reviews_count = data.reduce((acc, data) => acc + data.reviews_count, 0);
console.log(reviews_count)
  return (
    <>
      <div className="mt-3 p-6">
        <div className="flex items-center justify-between">
          <div className="">
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
          <div className="text-xl font-bold">سبد خرید</div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
                d="M9.107 11.5h-2.22a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5h2.22c.273 0 .5.227.5.5s-.227.5-.5.5ZM9.666 8.833H6.333a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h3.333c.274 0 .5.227.5.5s-.226.5-.5.5Z"
              />
            </svg>
          </div>
        </div>

        <div className="border border-Gray-4 bg-white rounded-lg mt-3 p-2">
          <div className="h-48 w-full flex flex-col overflow-auto ">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-sm bg-Gray-1 mt-1 px-2 py-2"
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
          <Totalprice Setstep={Setstep} totalPrice={totalPrice} reviews_count={reviews_count}/>
   
        </div>
      </div>
    </>
  );
}

export default OrderStep_1;
