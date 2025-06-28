import { useNavigate } from "react-router-dom";
import SearchLogo from "./SearchLogo"
import toast from "react-hot-toast";

function HeaderLogo() {
     const navigate=useNavigate()
  return (
      <div className="hidden xl:block ">
        <div className=" flex items-center justify-center gap-x-1 ">


          <svg onClick={()=>{toast.success('صفحه در حال توسعه هست')}}
            xmlns="http://www.w3.org/2000/svg"
            className="hidden  xl:block  h-10 w-10"
            fill="none"
          >
            <rect
              className="hidden  xl:block  h-10 w-10"
              fill="#E5F2E9"
              rx="4"
            />
            <path
              fill="#417F56"
              d="M20 20.75c-3.17 0-5.75-2.58-5.75-5.75S16.83 9.25 20 9.25s5.75 2.58 5.75 5.75-2.58 5.75-5.75 5.75Zm0-10A4.26 4.26 0 0 0 15.75 15 4.26 4.26 0 0 0 20 19.25 4.26 4.26 0 0 0 24.25 15 4.26 4.26 0 0 0 20 10.75ZM28.59 30.75c-.41 0-.75-.34-.75-.75 0-3.45-3.52-6.25-7.84-6.25s-7.84 2.8-7.84 6.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.27 4.19-7.75 9.34-7.75 5.15 0 9.34 3.48 9.34 7.75 0 .41-.34.75-.75.75Z"
            />
          </svg >       
             <svg    onClick={()=>{navigate("/home/order");}}
            xmlns="http://www.w3.org/2000/svg"
            className="hidden  xl:block  h-10 w-10"
            fill="none"
          >
            <rect
              className="hidden  xl:block  h-10 w-10"
              fill="#E5F2E9"
              rx="4"
            />
            <path
              fill="#417F56"
              d="M26.19 25.75H15.54c-.99 0-1.94-.42-2.61-1.15a3.573 3.573 0 0 1-.93-2.7l.83-9.96c.03-.31-.08-.61-.29-.84-.21-.23-.5-.35-.81-.35H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.74c.73 0 1.42.31 1.91.84.27.3.47.65.58 1.04h12.49c1.01 0 1.94.4 2.62 1.12.67.73 1.01 1.68.93 2.69l-.54 7.5c-.11 1.83-1.71 3.31-3.54 3.31ZM14.28 12.62l-.78 9.4c-.05.58.14 1.13.53 1.56.39.43.93.66 1.51.66h10.65c1.04 0 1.98-.88 2.06-1.92l.54-7.5a2.04 2.04 0 0 0-2.06-2.21H14.28v.01ZM24.25 30.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM16.25 30.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5Z"
            />
            <path
              fill="#417F56"
              d="M29 16.75H17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z"
            />
          </svg>
          <svg 
          onClick={()=>{navigate("/home/searchpage");}}
            xmlns="http://www.w3.org/2000/svg"
            className="hidden xl:block h-10 w-10"
            fill="none"
          >
            <rect
              className="hidden  xl:block  h-10 w-10"
              fill="#E5F2E9"
              rx="4"
            />
            <path
              fill="#417F56"
              d="M19.5 29.75c-5.65 0-10.25-4.6-10.25-10.25S13.85 9.25 19.5 9.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25Zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75ZM30 30.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
            />
          </svg>
        </div>
      </div>
  )
}

export default HeaderLogo