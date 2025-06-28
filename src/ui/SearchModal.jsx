import { HiOutlineX } from "react-icons/hi";
import Search from "../Search/Search";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useMutation } from "@tanstack/react-query";
import { postresult } from "../services/Home";
import { useNavigate } from "react-router-dom";

function SearchModal({ open, title, onClose }) {
  const [submitdata, setsubmitdata] = useState("");
  const [getsubmitdata, setgetsubmitdata] = useState([]);
  const [showresult, setshowredult] = useState();
 const[step,setstep]=useState(0)
  const navigate=useNavigate()
  const {
    isPending,
    data: otpresponse,
    isError,
    mutateAsync,
  } = useMutation({
    mutationFn: postresult,
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    data:d
  } = useForm();
  const { data: data2, isLoading } = Search();
  if (isLoading) return <Loading />;

  const handlersubmit =  async(data) => {
    setsubmitdata(data);
    setgetsubmitdata(data2);
if (!Array.isArray(data2)) return;
    const Mon = getsubmitdata.filter(
      (item) => item.name.slice(0, 1) === submitdata.search.slice(0, 1)
    );
   await  mutateAsync(Mon);

navigate("/home/search", {
  state: {
    mon: Mon,
    formData: data,
  }
});

  };

  return (
     open && (
      <div className="fixed backdrop-blur-sm  bg-Gray-6 h-screen w-full top-0 left-0 bg-opacity-30">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-xl w-[calc(100vw-1rem)] max-w-[42rem] max-h-[calc(100vh-2rem)]  bg-Gray-3 shadow-lg transition-all duration-500 ease-out ">
          <div className="flex py-8 px-12 flex-row-reverse relative items-center justify-between my-auto border-b-Gray-6 p-2  bg-transparent">
            <p className=" font-semibold text-xl  absolute top-1/2 left-1/2 -translate-x-1/2 text-Gray-7  -translate-y-1/2 ">
              {title}
            </p>
            <button onClick={onClose}>
              <HiOutlineX className="w-10 h-10 text-Gray-6  mr-5" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 bg-white rounded-xl">
            <div className="pb-3">
              لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
            </div>
            <form action="" onSubmit={handleSubmit(handlersubmit)}>
              <div className="flex items-center justify-center w-[28rem] mb-10 ">
                <div className="flex font-bold text-xs items-center justify-between border border-Gray-4 bg-white w-full rounded-sm  mt-3 mx-2 px-3 py-2">
                  <input
                    id={"search"}
                    {...register("search")}
                    type="text"
                    name="search"
                    className="bg-transparent w-full"
                    placeholder="جستجو"
                  />
                  <div className="">
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
                    
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
}

export default SearchModal;

