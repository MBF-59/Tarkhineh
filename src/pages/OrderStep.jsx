import { useEffect, useState } from "react";
import OrderStep_1 from "./OrderStep_1";
import OrderStep_2 from "./OrderStep_2";

function OrderStep({Setstep}) {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth); 
    };

    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>{size>1140?<OrderStep_2  Setstep={Setstep}/>:<OrderStep_1 Setstep={Setstep}/>}</div>
  )
}

export default OrderStep