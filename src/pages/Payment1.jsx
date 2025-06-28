
function Payment1() {
  return (
      <div className="border rounded-md p-4 mt-7">
        <div className="  border-b pb-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              fill="none"
            >
              <path
                fill="#353535"
                d="M14.667 6.667H1.334a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h13.333c.274 0 .5.227.5.5s-.226.5-.5.5ZM5.333 12H4a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h1.333c.274 0 .5.227.5.5s-.226.5-.5.5ZM9.667 12H7a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h2.667c.273 0 .5.227.5.5s-.227.5-.5.5Z"
              />
              <path
                fill="#353535"
                d="M11.707 14.666H4.294c-2.653 0-3.46-.8-3.46-3.426V5.76c0-2.627.807-3.427 3.46-3.427h7.407c2.653 0 3.46.8 3.46 3.427v5.473c.006 2.633-.8 3.433-3.454 3.433ZM4.294 3.333c-2.093 0-2.46.36-2.46 2.427v5.473c0 2.067.367 2.427 2.46 2.427h7.407c2.093 0 2.46-.36 2.46-2.427V5.76c0-2.067-.367-2.427-2.46-2.427H4.294Z"
              />
            </svg>
            <div className="">درگاه پرداخت</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-3">
          <div className="flex items-center justify-center gap-3">
            <img src="/public/photo/Bank 1.png" alt="" />
            <img src="/public/photo/Bank 2.png"  alt="" />
            <img src="/public/photo/Bank 3.png"  alt="" />
          </div>
          <div className="text-center text-sm mt-2 text-Gray-7">پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌(لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)</div>
        </div>
      </div>
  )
}

export default Payment1