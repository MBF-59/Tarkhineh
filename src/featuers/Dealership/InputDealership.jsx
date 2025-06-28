function InputDealership({
  type = "text",
  label,
  name,
  register,

  required,
  validationSchema,
  errors,
}) {
  return <>
    <div className="border rounded-sm px-4 py-2 border-Gray-4 w-full">
      <input
        type={type}
        {...register(name, validationSchema)}
        id={name}
        name={name}
        placeholder={label}
        className="w-full text-Gray-7"
      />
    </div>
        {errors?.[name] && (
         <span className="text-Error block text-sm mt-2">
           *{errors[name]?.message}*
         </span>
       )}
  </>
}

export default InputDealership;
