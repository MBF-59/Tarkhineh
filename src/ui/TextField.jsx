import React from "react";
import { SiPanasonic } from "react-icons/si";
// register={register}  label="شماره همراه" name="phoneNumber"
function TextField({
  label,
  type = "text",
  name,
  register,
  validationSchema = {},
  required,
  errors,
}) {
  const requireds ={required:"text-Error"};

  return (
    <div className="flex  items-center justify-center">
      <div className=" w-full">
        <div className={`flex relative rounded-sm border py-2  ${required?" border-Error":" text-Gray-8 "}  `}>
          <label
            htmlFor="name"
            className={` absolute font-normal text-sm -top-[0.7rem] right-4  ${required?"text-Error":" text-Gray-8 "} bg-white`}
          >
            {label}
          </label>

          <input
            {...register(name, validationSchema)}
            id={name}
            type={type}
            style={{ direction: "ltr" }}
            className="bg-transparent px-1 text-normal text-sm font-normal  mx-3 w-full"
          />
          {errors && errors[name] && (
            <span className="text-Error block font-bold text-sm">
              <span>{errors[name]?.message}</span>
            </span>
          )}
        </div>
        <div className="flex items-center">
          <span className={`order-1  ${required?"text-Error":" text-Gray-8 "} font-normal text-xs mt-1 mr-1`}>پر کردن این فیلد الزامی است! </span>
          <ErrorSvg required={required}/>
        </div>
      </div>
    </div>
  );
}

export default TextField;
export function ErrorSvg({required}) {
  return (
    <>
      <svg
 className={`h-4 w-4 mt-1   ${required?"fill-Error":" fill-Gray-8 "}`}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99967 15.1666C4.04634 15.1666 0.833008 11.9533 0.833008 7.99998C0.833008 4.04665 4.04634 0.833313 7.99967 0.833313C11.953 0.833313 15.1663 4.04665 15.1663 7.99998C15.1663 11.9533 11.953 15.1666 7.99967 15.1666ZM7.99967 1.83331C4.59967 1.83331 1.83301 4.59998 1.83301 7.99998C1.83301 11.4 4.59967 14.1666 7.99967 14.1666C11.3997 14.1666 14.1663 11.4 14.1663 7.99998C14.1663 4.59998 11.3997 1.83331 7.99967 1.83331Z"
     
        />
        <path
          d="M8 9.16665C7.72667 9.16665 7.5 8.93998 7.5 8.66665V5.33331C7.5 5.05998 7.72667 4.83331 8 4.83331C8.27333 4.83331 8.5 5.05998 8.5 5.33331V8.66665C8.5 8.93998 8.27333 9.16665 8 9.16665Z"

        />
        <path
          d="M7.99967 11.3334C7.91301 11.3334 7.82634 11.3134 7.74634 11.28C7.66634 11.2467 7.59301 11.2 7.52634 11.14C7.46634 11.0734 7.41967 11.0067 7.38634 10.92C7.35301 10.84 7.33301 10.7534 7.33301 10.6667C7.33301 10.58 7.35301 10.4934 7.38634 10.4134C7.41967 10.3334 7.46634 10.26 7.52634 10.1934C7.59301 10.1334 7.66634 10.0867 7.74634 10.0534C7.90634 9.98669 8.09301 9.98669 8.25301 10.0534C8.33301 10.0867 8.40634 10.1334 8.47301 10.1934C8.53301 10.26 8.57967 10.3334 8.61301 10.4134C8.64634 10.4934 8.66634 10.58 8.66634 10.6667C8.66634 10.7534 8.64634 10.84 8.61301 10.92C8.57967 11.0067 8.53301 11.0734 8.47301 11.14C8.40634 11.2 8.33301 11.2467 8.25301 11.28C8.17301 11.3134 8.08634 11.3334 7.99967 11.3334Z"
        
        />
      </svg>
    </>
  );
}
