import { toPersianNumbersWithComma } from "../utils/toPersianNumbersWithComma"


function Totalprice({totalPrice,reviews_count,Setstep}) {
  return (
   <div className="mt-3">
            <div className="border-b-2 border-t-2  flex items-center justify-between py-3.5 mt-1">
              <div className="">تخفیف محصولات</div>
              <div className="text-Gray-7">
                {toPersianNumbersWithComma(reviews_count)} تومان
              </div>
            </div>
            <div className="pb-3 border-b-2">
              <div className="flex items-center justify-between py-2 ">
                <div className="">هزینه ارسال</div>
                <div className="text-Gray-7">0 تومان</div>
              </div>
              <div className="flex   items-center gap-1 text-sm text-Gray-6 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  className="mr-2 shrink-0 self-start mt-1"
                >
                  <path
                    fill="#A9791C"
                    d="M8 9.167a.504.504 0 0 1-.5-.5v-3.5c0-.273.227-.5.5-.5s.5.227.5.5v3.5c0 .273-.227.5-.5.5ZM8 11.5a.66.66 0 0 1-.474-.194.975.975 0 0 1-.146-.22.657.657 0 0 1-.047-.253c0-.173.073-.347.193-.473a.698.698 0 0 1 .947 0c.12.127.193.3.193.473 0 .087-.02.174-.053.253a.77.77 0 0 1-.14.22A.66.66 0 0 1 8 11.5Z"
                  />
                  <path
                    fill="#A9791C"
                    d="M8 15.167c-.446 0-.9-.114-1.3-.347l-3.96-2.287a2.618 2.618 0 0 1-1.3-2.253V5.72c0-.927.5-1.787 1.3-2.253L6.7 1.18a2.59 2.59 0 0 1 2.6 0l3.96 2.287c.8.466 1.3 1.326 1.3 2.253v4.56c0 .927-.5 1.787-1.3 2.253L9.3 14.82c-.4.233-.853.347-1.3.347ZM8 1.833c-.273 0-.553.074-.8.214L3.24 4.333c-.493.287-.8.814-.8 1.387v4.56c0 .567.307 1.1.8 1.387l3.96 2.286a1.583 1.583 0 0 0 1.594 0l3.96-2.286c.493-.287.8-.814.8-1.387V5.72c0-.567-.307-1.1-.8-1.387l-3.96-2.286A1.59 1.59 0 0 0 8 1.833Z"
                  />
                </svg>
                <span className="text-WarningLight">
                هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
                محاسبه و به این مبلغ اضافه خواهد شد.</span>
              </div>
            </div>
            <div className="flex items-center justify-between m-3">
           
              <div className="">مبلغ قابل پرداخت</div>
              <div className="text-primary">{toPersianNumbersWithComma(totalPrice)} تومان </div>
            </div>
            <div className="flex items-center justify-center bg-primary rounded-sm py-2 cursor-pointer"onClick={()=> Setstep(2)} ><button  className="flex items-center justify-center bg-primary flex-row-reverse gap-x-2 text-white">ورود/ثبت‌نام <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#fff" d="M8 8.5a3.838 3.838 0 0 1-3.833-3.834A3.838 3.838 0 0 1 8 .833a3.838 3.838 0 0 1 3.834 3.833A3.838 3.838 0 0 1 8 8.5Zm0-6.667a2.84 2.84 0 0 0-2.833 2.833A2.84 2.84 0 0 0 8 7.5a2.84 2.84 0 0 0 2.834-2.834A2.84 2.84 0 0 0 8 1.833ZM13.727 15.167a.504.504 0 0 1-.5-.5c0-2.3-2.347-4.167-5.227-4.167-2.88 0-5.227 1.867-5.227 4.167 0 .273-.226.5-.5.5a.504.504 0 0 1-.5-.5C1.773 11.82 4.567 9.5 8 9.5c3.433 0 6.227 2.32 6.227 5.167 0 .273-.227.5-.5.5Z"/></svg></button></div>
          </div>
  )
}

export default Totalprice