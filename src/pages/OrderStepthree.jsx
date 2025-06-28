import { useEffect, useState } from "react";
import Loading from "../ui/Loading";
import OrderStep_6 from "./OrderStep_6";
import OrderStep_5 from "./OrderStep_5";

function OrderStepthree({Setstep }) {
  // const { data, isLoading } = usegetfood3();

  // const totalPrice = data.reduce(
  //   (acc, data) => acc + data.price_after_discount,
  //   0
  // );

  // const reviews_count = data.reduce((acc, data) => acc + data.reviews_count, 0);
 
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth); 
    };

    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);
//  if (isLoading) return <Loading />;
  return (
    <div>{size>1140?<OrderStep_5  Setstep={Setstep}/>:<OrderStep_6  Setstep={Setstep}/>}</div>
  )}

export default OrderStepthree