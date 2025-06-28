function DealershipProfit() {
  const dealershipBenefits = [
    "مشاوره در امور حقوقی، مالی و مالیاتی",
    "استفاده از برند شناخته شده ترخینه",
    "پشتیبانی بازاریابی و منابع انسانی",
    "به حداقل رساندن ریسک سرمایه گذاری",
    "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات",
    "تسریع روند بازگشت سرمایه",
    "طرح های تشویقی برای ارتقا فروش",
    "مشاوره های تخصصی جهت مدیریت رستوران",
  ];
  return (
    <div>
      <div className="flex items-center justify-center text-Gray-8 font-bold text-xl">
        مزیت دریافت نمایندگی
      </div>
      <div className="flex items-center justify-center mt-7 mb-6">
        <div className="flex flex-col gap-x-10 xl:grid xl:grid-cols-2 gap-y-3">
          {dealershipBenefits.map((item) => {
            return (
              <>
                <div className="flex gap-x-2 ">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                    >
                      <rect
                        width="14"
                        height="14"
                        x=".414"
                        y="10"
                        stroke="#417F56"
                        stroke-width="2"
                        rx="3"
                        transform="rotate(-45 .414 10)"
                      />
                    </svg>
                  
                </div>
                <div className="text-Gray-8 font-normal text-xl">{item}</div></div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DealershipProfit;
