import usegetfood from "../featuers/Home/usegetfood";
import Header from "../ui/Header";
import RowofFood from "../ui/RowofFood";

function SearchPage() {
  const { data, isLoading } = usegetfood();
  return (
    <>
      {" "}
      <Header />
      <div className="flex flex-col mt-10">
        <div className="flex items-center justify-center font-bold text-2xl">
          نتایج جستجو برای:
          <span className="font-bold text-2xl text-primary">پیشنهاد ویژه</span>{" "}
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-center  ">
            <div className="w-96 flex font-bold text-xs items-center justify-between border border-Gray-4 bg-white rounded-sm  mt-3 mx-2 px-4 py-2">
              <input type="text" className="outline-none" placeholder="پیشنهاد ویژه" />
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                >
                  <path
                    fill="#353535"
                    d="M7.666 14.5C3.9 14.5.833 11.433.833 7.667.833 3.9 3.9.833 7.666.833 11.433.833 14.5 3.9 14.5 7.667c0 3.766-3.067 6.833-6.834 6.833Zm0-12.667a5.84 5.84 0 0 0-5.833 5.834A5.84 5.84 0 0 0 7.666 13.5 5.84 5.84 0 0 0 13.5 7.667a5.84 5.84 0 0 0-5.834-5.834ZM14.667 15.167a.495.495 0 0 1-.354-.147l-1.333-1.333a.503.503 0 0 1 0-.707.503.503 0 0 1 .707 0l1.333 1.333a.503.503 0 0 1 0 .707c-.1.1-.227.147-.353.147Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {" "}
          <RowofFood data={data}  isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}

export default SearchPage;
