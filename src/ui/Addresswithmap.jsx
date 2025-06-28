import Map from "./Map"


function Addresswithmap() {
  return (
            <div className="flex  items-center gap-2 p-4 border-2  my-2 rounded-md">
              <div className="flex flex-col items-start justify-between h-full">
                <div className="flex items-center justify-start mb-3">
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
                   <div className="text-xl ">آدرس شعبه اکباتان</div>
                </div>
                <div className="text-Gray-7 text-normal">
                  <div className="">اکباتان، خیابان ریاحی، کوچه سیزدهم، ساختمان آیسا، طبقه همکف</div>
                  <div className="">شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</div>
                  <div className="">شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </div>
                  <div className="">ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</div>
                </div>
                <div className="self-center"><button className="border-2 border-Gray-7 text-Gray-7 py-1.5 px-8 rounded-md">مشاهده در نقشه</button></div>
              </div>
              <div className="w-1/2  "><Map/></div>
            </div>
  )
}

export default Addresswithmap