import { HiOutlineX } from "react-icons/hi";

function MenuModal({ open, children,onClose }) {
    return ( open && (
        <div className="fixed backdrop-blur-sm bg-Gray-6 h-screen w-full top-0 left-0 bg-opacity-30">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl w-[calc(100vw-1rem)] max-w-[50rem] max-h-[calc(100vh-2rem)] overflow-auto bg-transparent shadow-lg transition-all duration-500 ease-out ">
          <div className="flex items-center justify-between my-auto border-b-Gray-6 p-2  bg-transparent">
            <p className="text-Gray-6 font-bold text-base">{"اطلاعات محصول"}</p>
          <button onClick={onClose}>
          <HiOutlineX className="w-5 h-5 text-Gray-6 bg-white rounded-sm"/></button>
          </div>
          {children}
          </div>
        </div>
     ) );
  
}

export default MenuModal



