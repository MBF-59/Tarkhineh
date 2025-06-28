import { useForm } from "react-hook-form";
import Footerinput from "./Footerinput";

import Navlink from "./Navlink";
import { postcontacts } from "../services/Home";
import { useMutation } from "@tanstack/react-query";
function Footer() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const {
    isPending,
    data: otpresponse,
    isError,
    mutateAsync,
  } = useMutation({
    mutationFn: postcontacts,
  });

  const Sendotphandler = async (data) => {
    try {
      const message = await mutateAsync(data);

      toast.success("اطلاعات به درستی ثبت شد");
      // toast.success(message.message);
    } catch (error) {
      // toast.error(error?.message);
      toast.error("اطلاعات به درستی ثبت نشد");
    }
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: "url('/photo/footer/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white flex  items-center justify-evenly mr-0 pt-8  mx-20">
        <div className="mb-24  mx-24">
          <ul className="flex flex-col gap-y-4 ">
            <li className="font-normal text-xs  xl:text-xl whitespace-nowrap ">
              دسترسی اسان
            </li>
            <li className="font-normal text-xs">
              {" "}
              <Navlink to={"/home/tarkineh/questions"}>
                پرسش های متداول
              </Navlink>{" "}
            </li>
            <li className="font-normal text-xs">
              {" "}
              <Navlink to={"/home/tarkineh/roles"}>قوانین ترخینه </Navlink>{" "}
            </li>
            <li className="font-normal text-xs">
              {" "}
              <Navlink to={"/home/tarkineh/privacy"}>حریم خصوصی</Navlink>{" "}
            </li>
          </ul>
          <div className="flex items-center gap-x-2 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
            >
              <g clipPath="url(#a)">
                <path
                  fill="#EDEDED"
                  d="M16.425 3.125A5.21 5.21 0 0 0 11.22 8.33c0 .172.043.341.06.51-3.55-.34-6.688-2.05-8.82-4.665a.483.483 0 0 0-.795.06 5.164 5.164 0 0 0-.705 2.61c0 1.153.412 2.209 1.05 3.075-.124-.054-.259-.084-.375-.15a.479.479 0 0 0-.705.42v.06c0 1.768.915 3.304 2.265 4.245-.015-.002-.03.004-.045 0a.48.48 0 0 0-.54.615c.536 1.667 1.905 2.94 3.6 3.405a8.968 8.968 0 0 1-4.605 1.275 9.02 9.02 0 0 1-1.065-.06.479.479 0 0 0-.315.885 13.843 13.843 0 0 0 7.5 2.205c4.48 0 7.993-1.871 10.35-4.545 2.357-2.674 3.585-6.146 3.585-9.39 0-.137-.011-.27-.015-.405.88-.673 1.665-1.463 2.28-2.385a.48.48 0 0 0-.6-.705c-.247.11-.536.122-.795.21.341-.456.634-.947.81-1.5a.48.48 0 0 0-.705-.555A8.995 8.995 0 0 1 19.95 4.58c-.93-.87-2.154-1.455-3.525-1.455Zm0 .96a4.25 4.25 0 0 1 3.105 1.35c.116.12.287.17.45.135a9.881 9.881 0 0 0 1.8-.54c-.334.45-.746.834-1.23 1.125a.48.48 0 0 0 .315.9c.48-.058.908-.253 1.365-.375-.41.444-.86.846-1.35 1.2a.478.478 0 0 0-.195.42c.008.195.015.388.015.585 0 3-1.151 6.257-3.345 8.745-2.194 2.488-5.415 4.23-9.63 4.23-1.914 0-3.722-.424-5.355-1.17 2.025-.156 3.892-.872 5.4-2.055a.48.48 0 0 0-.285-.855c-1.583-.028-2.908-.949-3.615-2.25h.075c.474 0 .943-.06 1.38-.18a.481.481 0 0 0-.03-.93c-1.708-.345-2.989-1.736-3.285-3.465.484.167.979.298 1.515.315a.48.48 0 0 0 .285-.885 4.25 4.25 0 0 1-1.89-3.54c0-.547.142-1.05.33-1.53 2.4 2.634 5.76 4.384 9.555 4.575a.48.48 0 0 0 .495-.585 4.28 4.28 0 0 1-.12-.975 4.236 4.236 0 0 1 4.245-4.245Z"
                />
              </g>
              <defs>
                <clip-path clipPath id="a">
                  <path fill="#fff" d="M0 .5h24v24H0z" />
                </clip-path>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
            >
              <path
                fill="#EDEDED"
                d="M7.68 1.94c-3.44 0-6.24 2.8-6.24 6.24v8.64c0 3.44 2.8 6.24 6.24 6.24h8.64c3.44 0 6.24-2.8 6.24-6.24V8.18c0-3.44-2.8-6.24-6.24-6.24H7.68Zm0 .96h8.64a5.273 5.273 0 0 1 5.28 5.28v8.64a5.273 5.273 0 0 1-5.28 5.28H7.68a5.273 5.273 0 0 1-5.28-5.28V8.18A5.273 5.273 0 0 1 7.68 2.9Zm10.08 2.88a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92ZM12 7.22c-2.91 0-5.28 2.37-5.28 5.28s2.37 5.28 5.28 5.28 5.28-2.37 5.28-5.28S14.91 7.22 12 7.22Zm0 .96a4.313 4.313 0 0 1 4.32 4.32A4.313 4.313 0 0 1 12 16.82a4.313 4.313 0 0 1-4.32-4.32A4.313 4.313 0 0 1 12 8.18Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
            >
              <path
                fill="#EDEDED"
                d="M21.3 3.373c-.233.01-.46.076-.666.158-.203.082-1.372.58-3.1 1.32-1.726.737-3.97 1.699-6.196 2.652l-8.824 3.783.032-.012s-.264.088-.531.275a1.478 1.478 0 0 0-.396.389 1.03 1.03 0 0 0-.172.687c.114.924 1.072 1.186 1.072 1.186l.004.002 4.273 1.462c.109.364 1.296 4.326 1.557 5.165.144.464.28.731.42.914a.89.89 0 0 0 .226.213c.032.021.066.037.1.05h.002l.012.004-.011-.003c.008.003.016.009.023.011.016.006.025.006.045.01.489.17.894-.146.894-.146l.017-.014 2.625-2.434 4.26 3.321.053.025c.746.33 1.42.146 1.794-.158.373-.304.52-.695.52-.695l.016-.042 3.13-16.315c.08-.365.092-.68.016-.966a1.121 1.121 0 0 0-.49-.67 1.242 1.242 0 0 0-.704-.172Zm.026.976a.44.44 0 0 1 .188.02c.022.013.032.012.053.092.021.08.033.25-.025.515l-.002.005-3.113 16.22c-.007.017-.072.167-.22.288-.151.123-.32.219-.765.032l-4.658-3.633-.132-.103-.002.003-1.394-1.046 7.83-9.21a.481.481 0 0 0-.632-.711l-11.33 7.552-4.279-1.465s-.425-.237-.445-.401c-.001-.01-.006-.001.016-.034a.63.63 0 0 1 .147-.137c.14-.097.298-.156.298-.156l.016-.005.016-.007 8.824-3.783 6.196-2.652c1.726-.738 2.973-1.269 3.078-1.311.12-.049.24-.068.335-.073Zm-5.192 5.172-5.937 6.985-.003.003a.464.464 0 0 0-.052.075.481.481 0 0 0-.063.184v.004l-.774 3.478c-.012-.037-.021-.051-.035-.095v-.001c-.246-.79-1.366-4.526-1.52-5.043l8.384-5.59Zm-5.267 8.13 1.067.8-1.567 1.453.5-2.253Z"
              />
            </svg>
          </div>
        </div>

        <div className="mb-24  items-start">
          <ul className="flex flex-col  gap-y-4">
            <li className="font-normal  text-xs l   xl:text-xl whitespace-nowrap">
              شعبه های ترخیته
            </li>
            <Navlink to={"/home/textus"}>
              <li className="font-normal text-xs xl:text-sm">شعبه اکباتان</li>
            </Navlink>
          <Navlink to={"/home/textus"}>  <li className="font-normal text-xs  xl:text-sm"> شعبه اقدسیه</li></Navlink> 
         <Navlink to={"/home/textus"}> <li className="font-normal text-xs  xl:text-sm"> شعبه چالوس</li></Navlink>   
          <Navlink to={"/home/textus"}> <li className="font-normal text-xs  xl:text-sm ">شعبه ونک</li></Navlink>  
          </ul>
        </div>

        <div className="text-white hidden xl:block mb-9 mr-32 ">
          <div className="font-normal text-xs  xl:text-xl whitespace-nowrap">
            پیام های ترخینه{" "}
          </div>
          <form
            onSubmit={handleSubmit(Sendotphandler)}
            action=""
            className="flex flex-col"
          >
            <div className="grid grid-cols-2  gap-x-6">
              <div className="">
                <Footerinput
                  validationSchema={{
                    required: "این فیلد اجباری است ",
                    minLength: {
                      value: 3,
                      message: "حداقل ۳ حرف وارد کنید",
                    },
                    maxLength: {
                      value: 20,
                      message: "حداکثر ۲۰ حرف وارد شود",
                    },
                  }}
                  register={register}
                  name="fullname"
                  label="نام و نام خانوادگی"
                  errors={errors}
                />
                <Footerinput
                  validationSchema={{
                    required: "این فیلد اجباری است ",
                    minLength: {
                      value: 3,
                      message: "حداقل ۳ حرف وارد کنید",
                    },
                    maxLength: {
                      value: 20,
                      message: "حداکثر ۲۰ حرف وارد شود",
                    },
                  }}
                  register={register}
                  name="phonenumber"
                  label="شماره موبایل"
                  errors={errors}
                />
                <Footerinput
                  validationSchema={{
                    required: "این فیلد اجباری است ",
                    minLength: {
                      value: 3,
                      message: "حداقل ۳ حرف وارد کنید",
                    },
                    maxLength: {
                      value: 50,
                      message: "حداکثر 5۰ حرف وارد شود",
                    },
                  }}
                  register={register}
                  name="email"
                  label="ادرس ایمیل(اختیاری)"
                  errors={errors}
                />
              </div>
              <textarea
                {...register("comment", {
                  required: "لطفاً نظر خود را بنویسید",
                  minLength: {
                    value: 5,
                    message: "نظر باید حداقل ۵ حرف داشته باشد",
                  },
                })}
                name="comment"
                rows="4"
                cols="50"
                className="bg-transparent border px-3 py-1 rounded-sm my-2"
                placeholder="نظر خود را اینجا بنویسید..."
              ></textarea>
            </div>
            <button className="self-end bg-transparent border px-15 py-1 rounded-sm my-2">
              ارسال پیام{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
