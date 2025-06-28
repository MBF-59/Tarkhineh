import { useState } from "react"
import Modal from "./Modal"
import SearchModal from "./SearchModal"
import { useNavigate } from "react-router-dom"


function SearchLogo() {
   const navigate=useNavigate()
    const[open,setopen]=useState(false)
    console.log(open)
  return (<>

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
        </>
  )
}

export default SearchLogo





 