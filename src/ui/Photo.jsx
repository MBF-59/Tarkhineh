import { useEffect, useState } from "react";
import usePhoto from "../featuers/Home/getphoto";
import Loading from "./Loading";

const Photo = () => {
  const { data, isLoading } = usePhoto();
  const [photo, setphoto] = useState([]);
  const [photonum, sephotonumber] = useState(3);
//برای جا به جایی خودکار نوشته شده است 
  // const[time,settime]=useState(5)
  // useEffect(() => {
  //   const timer = time > 0 && setInterval(() => {
  //     settime((t) => t - 1);
  //     sephotonumber((p) => p - 1); 
  //   }, 3000);
  
  //   return () => {
  //     if (timer) clearInterval(timer);
  //   };
  // }, [time]);
  


useEffect(() => {
  if (data) setphoto(data);
}, [data]);

  if (isLoading) return <Loading />;

  // const
  return (
    <>
      <div className="   relative mx-auto  w-full  flex items-center justify-center   ">
      
    <button 
          onClick={() => {
            if (photonum > 0) {
              sephotonumber(photonum - 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            className={`absolute  right-2 top-1/2 bottom-1/2  -translate-y-1/2 ${data?.photo[photonum]?.id == 1 ? "hidden" : ""} `}
          >
            <path
              fill="#fff"
              d="M11.88 27.56a.989.989 0 0 1-.707-.293 1.006 1.006 0 0 1 0-1.414l8.694-8.693c.64-.64.64-1.68 0-2.32l-8.694-8.693a1.006 1.006 0 0 1 0-1.414 1.006 1.006 0 0 1 1.414 0l8.693 8.694c.68.68 1.067 1.6 1.067 2.573 0 .973-.374 1.893-1.067 2.573l-8.693 8.694c-.2.186-.454.293-.707.293Z"
            />
          </svg>
        </button>
        <img
          className="w-full h-52    object-cover"
          src={data?.photo[photonum].image}
          alt=""
        />
   

    <button
          onClick={() => {
            if (photonum < 4) {
              sephotonumber(photonum + 1);
            }
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className={`absolute z-1 left-2 top-1/2 bottom-1/2  -translate-y-1/2 ${data?.photo[photonum]?.id == 5 ? "hidden" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 27.56C19.7467 27.56 19.4934 27.4667 19.2934 27.2667L10.6 18.5734C9.18671 17.16 9.18671 14.84 10.6 13.4267L19.2934 4.73336C19.68 4.34669 20.32 4.34669 20.7067 4.73336C21.0934 5.12003 21.0934 5.76003 20.7067 6.14669L12.0134 14.84C11.3734 15.48 11.3734 16.52 12.0134 17.16L20.7067 25.8534C21.0934 26.24 21.0934 26.88 20.7067 27.2667C20.5067 27.4534 20.2534 27.56 20 27.56Z"
              fill="white"
            />
          </svg>
        </button>  
        
      </div>
    </>
  );
};

export default Photo;
