
function Payment() {
  return (
           <div className="flex items-center  border  mt-3 rounded-lg gap-2  py-5 pb-7">
            <div className="flex items-center self-start gap-3 mt-6  mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
              >
                <path
                  fill="#353535"
                  d="M22 9.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 17.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 17.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                />
                <path
                  fill="#353535"
                  d="M17.56 21.75H6.44c-3.98 0-5.19-1.2-5.19-5.14V8.39c0-3.94 1.21-5.14 5.19-5.14h11.11c3.98 0 5.19 1.2 5.19 5.14v8.21c.01 3.95-1.2 5.15-5.18 5.15Zm-11.12-17c-3.14 0-3.69.54-3.69 3.64v8.21c0 3.1.55 3.64 3.69 3.64h11.11c3.14 0 3.69-.54 3.69-3.64V8.39c0-3.1-.55-3.64-3.69-3.64H6.44Z"
                />
              </svg>
              <div className="">درگاه پرداخت</div>
            </div>
            <div className="flex flex-col items-start justify-center mr-5 text-Gray-7">
              <div className=" flex items-center mt-5  justify-center gap-3">
              <img src="/public/photo/Bank-1.png" alt="" />
              <img src="/public/photo/Ban 2.png" alt="" />
              <img src="/public/photo/Ban3.png" alt="" /></div>
               <div className="text-[12px] self-center">پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.</div>
           <div className="text-[10px]  self-center">(لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)</div>
            </div>
           
          </div>
  )
}

export default Payment