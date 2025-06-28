import { useForm } from "react-hook-form";
import InputDealership from "./InputDealership";
import InputDealershipbigger from "./InputDealershipbigger";
import { useMutation } from "@tanstack/react-query";
import { postconsultation, postRepresentation } from "../../services/Home";
import toast from "react-hot-toast";
import Map from "../../ui/Map";
import Date from "../../ui/Date";
import DatePicker from "react-multi-date-picker";
import  { useState } from "react";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";

function FormDealership() {
        const [dates, setDates] = useState([]);
            const[mapCenter,setMarkerPosition]=useState([35.6892, 51.3890])
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const {
    handleSubmit:  handleSubmit1,
    register: register1,
    formState: { errors:errors1 },
    reset:reset1,
  } = useForm();

  const {
    isPending,
    data,
    isError,
    mutateAsync,
  } = useMutation({
    mutationFn: postconsultation,
  });
    const {
    isPending: isPending1,
    data:formtwo ,
    isError: isError1,
    mutateAsync:mutateAsync1,
  } = useMutation({
    mutationFn:  postRepresentation,
  });
  const Sendotphandler2 = async (data) => {
    try {
          const newDate = {
      ...data,
      date: mapCenter?.toString()  
    };
      const message = await mutateAsync1(newDate);
      reset();
      toast.success("اطلاعات به درستی ثبت شد");
    } catch (error) {
      toast.error("اطلاعات به درستی ثبت نشد");
    }
  };

const Sendotphandler = async (data) => {
  try {
    const newDate = {
      ...data,
      date: dates?.toString()  
    };
    const message = await mutateAsync(newDate);
    reset();
    toast.success("اطلاعات به درستی ثبت شد");
  } catch (error) {
    toast.error("اطلاعات به درستی ثبت نشد");
  }
};


  return (
    <>
      <div className=" mb-8 border-b border-t py-10">
        {" "}
        <div className="flex items-center justify-center">
          <span className="font-bold text-2xl text-Gray-8 mb-4">
            دریافت مشاوره
          </span>
        </div>
        <form action="" onSubmit={handleSubmit1(Sendotphandler)}>
          <div className="flex items-center justify-between gap-x-4">
            <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value: 1,
                  message: "حداقل 1 حرف وارد کنید",
                },
                maxLength: {
                  value: 20,
                  message: "حداکثر ۲۰ حرف وارد شود",
                },
              }}
              register={register1}
              name="fullname"
              label="نام و نام خانوادگی"
              errors={errors1}
            />
            <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value: 1,
                  message: "حداقل 1 حرف وارد کنید",
                },
                maxLength: {
                  value: 20,
                  message: "حداکثر ۲۰ حرف وارد شود",
                },
              }}
              register={register1}
              name="phonenumber"
              label="شماره تلفن"
              errors={errors1}
              
            />
            {/* <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value: 1,
                  message: "حداقل1 حرف وارد کنید",
                },
                maxLength: {
                  value: 2,
                  message: "حداکثر 2 حرف وارد شود",
                },
              }}
              register={register1}
              name="timeline"
              label="زمان ایده ال"
              errors={errors1}
              type="text"
            /> */}

<DatePicker 
placeholder="تاریخ ایده ال"
  containerClassName="w-full"
  calendarPosition="bottom-center"
  inputClass="textField__input border rounded-sm px-4 py-2 border-Gray-4 w-full"
  value={dates}
  onChange={setDates}
  format="YYYY/MM/DD"
  calendar={persian}
  locale={persian_fa}

/>
          </div>

          <div className="flex items-center justify-center">
            <button className="px-4 py-2 rounded-sm mt-5 text-white  bg-primary">
              درخواست مشاوره
            </button>
          </div>
        </form>
      </div>










<form action="" onSubmit={handleSubmit(Sendotphandler2)}>
      <div className="border-2 rounded-sm    px-4  py-9 mb-5 ">
        <div className="flex items-center justify-center">
          <span className="font-bold text-2xl text-Gray-8">
            فرم درخواست نمایندگی
          </span>
        </div>
        <div>
          <div className="font-normal text-xl  text-Gray-8">
            مشخصات فرد متقاضی
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value:  1,
                  message: "حداقل10 حرف وارد کنید",
                },
                maxLength: {
                  value: 22,
                  message: "حداکثر20 حرف وارد شود",
                },
              }}
              register={register}
              name="fullname_"
              label="نام و نام خانوادگی"
              errors={errors}
              type="text"
            
              
            />
            <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value: 11,
                  message: "حداقل11 حرف وارد کنید",
                },
                maxLength: {
                  value: 20,
                  message: "حداکثر 20 حرف وارد شود",
                },
              }}
              register={register}
              name="personalnumber"
              label="کدملی"
              errors={errors}
              type="number"
        
              
            />
            <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value:11,
                  message: "حداقل 11 حرف وارد کنید",
                },
                maxLength: {
                  value: 20,
                  message: "حداکثر ۲۰ حرف وارد شود",
                },
              }}
              register={register}
              name="phonenumber_"
              label="شماره تلفن"
              errors={errors}
              
            />
          </div>
        </div>
        <div className="font-normal text-xl  text-Gray-8 mt-6">
          ادرس ملک متقاضی
        </div>
        <div className="flex items-center justify-between gap-x-4  mt-5">
          {" "}
          <div className="w-full flex flex-col gap-y-5 self-start">
            <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value: 1,
                  message: "حداقل1 حرف وارد کنید",
                },
                maxLength: {
                  value: 20,
                  message: "حداکثر 20 حرف وارد شود",
                },
              }}
              register={register}
              name="ostan"
              label="استان"
              errors={errors}
              type="text"
            />{" "}
            <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value: 1,
                  message: "حداقل1 حرف وارد کنید",
                },
                maxLength: {
                  value: 20,
                  message: "حداکثر 20 حرف وارد شود",
                },
              }}
              register={register}
              name="mantagha"
              label="منطقه"
              errors={errors}
              type="text"

            />{" "}
          </div>
          <div className="w-full flex flex-col gap-y-5 ">
            {" "}
            <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value: 1,
                  message: "حداقل1 حرف وارد کنید",
                },
                maxLength: {
                  value: 20,
                  message: "حداکثر 20 حرف وارد شود",
                },
              }}
              register={register}
              name="city"
              label="َشهر"
              errors={errors}
              type="text"
            />{" "}
            <InputDealershipbigger title="ادرس دقیق" type="text" />
          </div>
          <div className="w-full self-start border rounded-sm p-5 border-Gray-5  h-48">
      <Map mapCenter={mapCenter} setMarkerPosition={setMarkerPosition}/>
          </div>
        </div>
        <div className="">
          <div className="font-normal text-xl  text-Gray-8">
            مشخصات ملک متقاضی
          </div>
          <div className="flex items-center justify-between gap-x-4 mt-5 mb-8">
            <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value: 1,
                  message: "حداقل1 حرف وارد کنید",
                },
                maxLength: {
                  value: 20,
                  message: "حداکثر 20 حرف وارد شود",
                },
              }}
              register={register}
              name="malekeat"
              label="نوع مالکیت"
              errors={errors}
              type="text"
              title="نوع مالکیت"
            />
            <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value: 1,
                  message: "حداقل1 حرف وارد کنید",
                },
                maxLength: {
                  value: 2,
                  message: "حداکثر 2 حرف وارد شود",
                },
              }}
              register={register}
              name="metermokeab"
              label="مساحت ملک (متر مربع)"
              errors={errors}
              type="text"
              
            />
            <InputDealership
              validationSchema={{
                required: "این فیلد اجباری است ",
                minLength: {
                  value: 1,
                  message: "حداقل1 حرف وارد کنید",
                },
                maxLength: {
                  value: 10,
                  message: "حداکثر 10 حرف وارد شود",
                },
              }}
              register={register}
              name="age"
              label="سن بنا"
              errors={errors}
              type="number"
              
            />
          </div>
        </div>
        <div className="font-normal text-xl  text-Gray-8">
          امکانات ملک متقاضی
        </div>
        <div className="flex w-full justify-between">
          <div className="flex">
            <div className=""></div>
            <div className="">
              <div className="mb-5 mt-5 text-Gray-7">ملک متقاضی:</div>{" "}
              <div className="flex items-center gap-x-3">
                <input type="checkbox"  className="accent-primary"/>
                <span className="text-Gray-7">پروانه کسب دارد.</span>
              </div>
              <div className="mt-5 flex items-center gap-x-3">
                <input type="checkbox"  className="accent-primary"/>
                <span className="text-Gray-7">اشپزخانه دارد </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="mt-12 mr-14">
                <div className="flex items-center gap-x-3">
                  <input type="checkbox" className="accent-primary" />
                  <span className="text-Gray-7">پارکینگ دارد </span>
                </div>
                <div className="mt-5 flex items-center gap-x-3">
                  <input type="checkbox" className="accent-primary" />
                  <span className="text-Gray-7">انبار دارد </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <span className="text-Gray-7">:تصاویر اطلاعات</span>
            <div className="w-full self-startborder rounded-sm p-5 border border-Gray-5 h-48 flex flex-col items-center justify-center">
   <input  id="files"  style={{ display: "none" }} type="file"/>
    <svg   for="files"  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none"><path fill="#717171" d="M32.16 46c-1.093 0-2-.907-2-2V30.667c0-1.094.907-2 2-2s2 .906 2 2V44c0 1.093-.907 2-2 2Z"/><path fill="#717171" d="M38.667 39.333H25.333c-1.093 0-2-.906-2-2 0-1.093.907-2 2-2h13.334c1.093 0 2 .907 2 2 0 1.094-.907 2-2 2Z"/><path fill="#717171" d="M45.333 60.667H18.667c-11.76 0-15.334-3.574-15.334-15.334V18.667c0-11.76 3.574-15.334 15.334-15.334h4c4.666 0 6.133 1.52 8 4l4 5.334C35.547 13.84 35.68 14 37.333 14h8c11.76 0 15.334 3.573 15.334 15.333v16c0 11.76-3.574 15.334-15.334 15.334ZM18.667 7.333c-9.52 0-11.334 1.814-11.334 11.334v26.666c0 9.52 1.814 11.334 11.334 11.334h26.666c9.52 0 11.334-1.814 11.334-11.334v-16c0-9.52-1.814-11.333-11.334-11.333h-8c-3.413 0-4.533-1.173-5.866-2.933l-4-5.334c-1.387-1.84-1.787-2.4-4.8-2.4h-4Z"/></svg>
    <label className="font-normal text-xl  text-Gray-7 mt-3"   for="files">تصاویری از ملک را بارگذاری کنید...</label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="px-15 py-2 rounded-sm mt-4 text-white   bg-primary">
                ثبت اطلاعات 
          </button>
        </div>
      </div>
      </form>
    </>
  );
}

export default FormDealership;
