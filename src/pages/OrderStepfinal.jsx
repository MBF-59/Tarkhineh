import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function OrderStepfinal() {
    const navigate=useNavigate();
  return (
    <div className=" relative  flex items-center justify-center flex-col gap-y-12 mb-8 mt-12">
      <div className="gap-y-4">
        <div class="loader">
          <div class="container">
            <div class="coffee-header">
              <div class="coffee-header__buttons coffee-header__button-one"></div>
              <div class="coffee-header__buttons coffee-header__button-two"></div>
              <div class="coffee-header__display"></div>
              <div class="coffee-header__details"></div>
            </div>
            <div class="coffee-medium">
              <div class="coffe-medium__exit"></div>
              <div class="coffee-medium__arm"></div>
              <div class="coffee-medium__liquid"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
              <div class="coffee-medium__cup"></div>
            </div>
            <div class="coffee-footer"></div>
          </div>
        </div>
      </div>
      <div className=" text-primary font-bold text-3xl ">
        پرداخت شما با موفقیت انجام شد!
      </div>
      <div className=" text-primary   text-xl">
        کد رهگیری سفارش شما: ۲۱۵۴۹۰۱۹
      </div>
      <div className="flex items-center justify-center gap-x-8">
        <button onClick={()=>{toast.success('صفحه در حال توسعه هست')}} className="bg-primary px-11 py-2 text-xl rounded-md text-white">
          پیگیری سفارش
        </button>
        <button  onClick={()=>{navigate("/home/mainpage")}} className="bg-white border-primary border-2 rounded-md px-4 py-1 text-xl text-primary">
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
}

export default OrderStepfinal;
