import React, { useState } from "react";
import Header from "../ui/Header";
import Modal from "../ui/Modal";
import ModalSeaech from "../ui/ModalSeaech";

function Search() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Header />
      <ModalSeaech
        ModalSeaech
        open={open}
        title={"جستجو"}
        onClose={() => {
          setOpen((prev) => !prev);
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full    pb-5 bg-white rounded-b-md">
          <div className="mt-57">
            لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
          </div>
          <div className="flex items-center justify-between w-1/2 flex-row-reverse border-2 px-4 py-2 rounded-lg  border-Gray-4 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="#353535"
                d="M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25Zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75ZM22 22.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
              />
            </svg>
            <input placeholder="جستجو" className="bg-transparent" type="text" name="" id="" />
          </div>
        </div>
      </ModalSeaech>
    </div>
  );
}

export default Search;

// { open, children,title,onClose }
