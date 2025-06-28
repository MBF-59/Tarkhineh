function Footerinput({
  label,
  name,
  register,
  type = "text",
  required,
  validationSchema,
  errors,
}) {
  return <>
<div className=" border px-3 py-1 rounded-sm my-2">

      <input  
      placeholder={label}
        type={type}
        className="bg-transparent "
        {...register(name, validationSchema)}
      id={name}
      name={name}
         autoComplete="off"
      />

    </div>            {errors?.[name] && (
        <span className="text-Error block text-sm mt-2">
          *{errors[name]?.message}*
        </span>
      )}
 </>
}

export default Footerinput;




                // <Footerinput
                //   validationSchema={{
                //     required: "این فیلد اجباری است ",
                //     minLength: {
                //       value: 3,
                //       message: "حداقل ۳ حرف وارد کنید",
                //     },
                //     maxLength: {
                //       value: 20,
                //       message: "حداکثر ۲۰ حرف وارد شود",
                //     },
              
                //   }}
                //   register={register}
                //   name="phonenumber"
                //   label="شماره موبایل"
                //   errors={errors}
                // />