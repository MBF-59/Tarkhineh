import { useState } from "react";
import Header from "../ui/Header";
import OrderStep from "./OrderStep";
import OrderSteptwo from "./OrderSteptwo";
import OrderStepthree from "./OrderStepthree";
import OrderStepfinal from "./OrderStepfinal";

function Order() {
  const [step, Setstep] = useState(1);
  const renderStep = () => {
    switch (step) {
      case 1:
        return <OrderStep  Setstep={Setstep}/>;
      case 2:
        return <OrderSteptwo  Setstep={Setstep}/>;
      case 3:
        return <OrderStepthree  Setstep={Setstep}/>;
        case 4:
        return <OrderStepfinal />;
      default:
        return null;
    }
  };
  return (
    <>
      <Header />
      <div>{renderStep()}</div>
    </>
  );
}

export default Order;
