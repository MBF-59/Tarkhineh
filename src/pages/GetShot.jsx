import DealershipHeader from "../featuers/Dealership/DealershipHeader"
import DealershipProfit from "../featuers/Dealership/DealershipProfit"
import FormDealership from "../featuers/Dealership/FormDealership"
import Header from "../ui/Header"


function GetShot() {
  return (
    <div><Header/>
      <DealershipHeader/>
    <DealershipProfit/>
    <FormDealership/>
    </div>
  )
}

export default GetShot